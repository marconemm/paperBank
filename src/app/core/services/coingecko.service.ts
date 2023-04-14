import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BtcBrl } from '../models/btc-brl';
import { API_BASE_URL } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoService {
  constructor(private httpClient: HttpClient) { }

  getBTC_BRL(): Observable<BtcBrl> {
    const endPoint = '/simple/price';
    const queryParams =
      '?ids=bitcoin&vs_currencies=brl&include_last_updated_at=true&precision=2';

    return this.httpClient.get<BtcBrl>(
      `${API_BASE_URL}${endPoint}${queryParams}`
    );
  }
}
