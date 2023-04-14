interface IBtc_Brl {
  brl: number;
  last_updated_at: number;
}

export class BtcBrl {
  bitcoin: IBtc_Brl;

  constructor() {
    this.bitcoin = {} as IBtc_Brl;
    this.bitcoin.brl = 0;
    this.bitcoin.last_updated_at = 0;
  }
}
