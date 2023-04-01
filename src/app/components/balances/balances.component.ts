import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko.service';
import { Card } from '../../interfaces/balances';
import { Constants } from 'src/app/enums/constants';
import { JeriSchoolService } from 'src/app/services/jeri-school.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent implements OnInit {
  card: Card;

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
  }

  ngOnInit(): void {
    this.setCardInfo();
  }

  setCardInfo(): void {
    this.card.id = this.jeriSchoolService.getCardId();
    this.card.balance_sat = this.jeriSchoolService.getSatBalance();

    this.coingeckoService.getBTC_BRL().subscribe((observer) => {
      this.card.prices.btc_brl = observer.bitcoin.brl;
      this.card.prices.sat_brl = parseFloat(
        (observer.bitcoin.brl / Constants._100M).toFixed(2)
      );

      this.card.balance_brl = parseFloat(
        (this.card.balance_sat * this.card.prices.sat_brl).toFixed(2)
      );
    });

    this.card.balance_btc = this.card.balance_sat / Constants._100M;
  }
}
