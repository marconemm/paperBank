import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko.service';
import { Card } from '../../interfaces/balances';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent implements OnInit {
  card: Card;

  constructor(private coingecko: CoingeckoService) {
    this.card = {
      id: '042072D2E47580',
      balance_sat: 16620,
      balance_btc: 0.0001662,
      balance_brl: 18.93,
      prices: {
        btc_brl: 0,
        sat_brl: 0,
        time: '',
      },
    };
  }

  ngOnInit(): void {
    debugger;
    this.card.prices.btc_brl = 113870.86;
    this.card.prices.sat_brl = this.card.prices.btc_brl / 100000000;
    this.card.prices.time = '2011-10-05T14:48:00.000Z';
    this.coingecko.getBTC_BRL().then((response) => console.log(response));
  }
}
