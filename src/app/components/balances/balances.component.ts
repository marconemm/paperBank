import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko.service';
import { Card } from '../../interfaces/balances';
import { Constants } from 'src/app/enums/constants';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent implements OnInit {
  card: Card;

  constructor(private coingecko: CoingeckoService) {
    this.card = {
      id: '',
      balance_sat: 0,
      balance_btc: 0,
      balance_brl: 0,
      prices: {
        btc_brl: 0,
        sat_brl: 0,
        time: 0,
      },
    };
  }

  ngOnInit(): void {
    this.setCardInfo();
  }

  setCardInfo(): void {
    this.card.id = '042072D2E47580';
    this.card.balance_sat = 16620;

    this.coingecko.getBTC_BRL().subscribe((observer) => {
      this.card.prices.btc_brl = observer.bitcoin.brl;
      this.card.prices.sat_brl = parseFloat(
        (observer.bitcoin.brl / Constants._100M).toFixed(2)
      );

      this.card.balance_brl = parseFloat(
        (this.card.balance_sat * this.card.prices.sat_brl).toFixed(2)
      );

      this.card.prices.time = observer.bitcoin.last_updated_at;
    });

    this.card.balance_btc = this.card.balance_sat / Constants._100M;
  }
}
