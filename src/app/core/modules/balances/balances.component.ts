import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/utils/enums/constants';
import { take } from 'rxjs';
import {
  IconDefinition,
  faCreditCard,
} from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

//Services:
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Card } from 'src/app/core/models/card';
import { CoingeckoService } from 'src/app/core/services/coingecko.service';
import { JeriSchoolService } from 'src/app/core/services/jeri-school.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent implements OnInit {
  card: Card;
  cardIcon: IconDefinition;
  btcIcon: IconDefinition;
  receiptIcon: IconDefinition;
  isLoading: boolean;

  constructor(
    private coingeckoService: CoingeckoService,
    private jeriSchoolService: JeriSchoolService,
    private toastr: ToastrService,
    private loadingService: LoadingService
  ) {
    this.isLoading = true;
    this.cardIcon = faCreditCard;
    this.btcIcon = faBitcoin;
    this.receiptIcon = faReceipt;
    this.card = this.setCardInfo();
  }

  ngOnInit(): void {
    this.card = this.setCardInfo();
    this.setLoading();
  }

  setCardInfo(): Card {
    const card = new Card();

    if (!this.card) {
      card.prices.time = new Date(Date.now()).toISOString();

      return card;
    }

    card.id = this.jeriSchoolService.getCardId();
    card.balance_sat = this.jeriSchoolService.getSatBalance();

    this.coingeckoService
      .getBTC_BRL()
      .pipe(take(1))
      .subscribe({
        next: (observer) => {
          card.prices.btc_brl = observer.bitcoin.brl;
          card.prices.sat_brl = observer.bitcoin.brl / Constants._100M;

          card.balance_brl = card.balance_sat * card.prices.sat_brl;
        },
        error: (err: HttpErrorResponse) => {
          let erroText = err.message.substring(0, 22);
          erroText = `O erro "${err.status} - ${erroText}[...]" ocorreu. Por favor, tente mais tarde`;

          console.error(err);
          this.toastr.error(erroText, 'Erro:');
        },
        complete: () => {
          console.info('INFO: Coingecko fetched successfully.');
        },
      });

    card.balance_btc = card.balance_sat / Constants._100M;

    return card;
  }

  setLoading(): void {
    //TODO: study abou the "TakeUntil" from rxjs.
    this.loadingService
      .getObservable()
      .pipe(take(2))
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
      });
  }
}
