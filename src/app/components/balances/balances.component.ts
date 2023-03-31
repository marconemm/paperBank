import { Component } from '@angular/core';

interface Price {
  btc_brl: number;
  sat_brl: number;
  time: string;
}

interface Card {
  id: string;
  balance_sat: number;
  balance_btc: number;
  balance_brl: number;
  prices: Price;
}

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent {
  card: Card;

  constructor() {
    this.card = {
      id: '042072D2E47580',
      balance_sat: 16620,
      balance_btc: 0.0001662,
      balance_brl: 18.93,
      prices: {
        btc_brl: 113870.86,
        sat_brl: 0.00113871,
        time: '03032023T231800Z',
      },
    };
  }
}
