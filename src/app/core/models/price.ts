export class Price {
  btc_brl: number;
  sat_brl: number;
  time: string;

  constructor() {
    this.btc_brl = 0;
    this.sat_brl = 0;
    this.time = new Date(Date.now()).toISOString();
  }
}
