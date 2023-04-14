import { Price } from './price';

export class Card {
  id: string;
  balance_sat: number;
  balance_btc: number;
  balance_brl: number;
  prices: Price;

  constructor() {
    this.id = '';
    this.balance_sat = 0;
    this.balance_btc = 0;
    this.balance_brl = 0;
    this.prices = new Price();
  }
}
