import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko.service';
import { Card } from '../../interfaces/balances';
import { Constants } from 'src/app/enums/constants';
import { JeriSchoolService } from 'src/app/services/jeri-school.service';
import { take } from 'rxjs';
import {
  IconDefinition,
  faCreditCard,
} from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent implements OnInit {
  card: Card;
  cardIcon: IconDefinition;
  btcIcon: IconDefinition;
  reciptIcon: IconDefinition;

  constructor(
    private coingeckoService: CoingeckoService,
    private jeriSchoolService: JeriSchoolService
  ) {
    this.card = {
      id: '',
      balance_sat: 0,
      balance_btc: 0,
      balance_brl: 0,
      prices: {
        btc_brl: 0,
        sat_brl: 0,
        time: new Date(Date.now()).toISOString(),
      },
    };

    this.cardIcon = faCreditCard;
    this.btcIcon = faBitcoin;
    this.reciptIcon = faReceipt;
  }

  ngOnInit(): void {
    this.setCardInfo();
  }

  setCardInfo(): void {
    this.card.id = this.jeriSchoolService.getCardId();
    this.card.balance_sat = this.jeriSchoolService.getSatBalance();

    this.coingeckoService
      .getBTC_BRL()
      .pipe(take(1))
      .subscribe((observer) => {
        this.card.prices.btc_brl = observer.bitcoin.brl;
        this.card.prices.sat_brl = observer.bitcoin.brl / Constants._100M;

        this.card.balance_brl =
          this.card.balance_sat * this.card.prices.sat_brl;
      });

    this.card.balance_btc = this.card.balance_sat / Constants._100M;
  }
}
