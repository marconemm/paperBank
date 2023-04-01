interface Price {
  btc_brl: number;
  sat_brl: number;
  time: string;
}

export interface Card {
  id: string;
  balance_sat: number;
  balance_btc: number;
  balance_brl: number;
  prices: Price;
}
