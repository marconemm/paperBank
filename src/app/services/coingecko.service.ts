import { Injectable } from '@angular/core';
import { IBtc_Brl } from '../interfaces/coingecko';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoService {
  constructor(private httClient: HttpClient) {}

  getBTC_BRL(): Observable<IBtc_Brl> {
    const endPoint = '/simple/price';
    const queryParams =
      '?ids=bitcoin&vs_currencies=brl&include_last_updated_at=true&precision=2';

    return this.httClient.get<IBtc_Brl>(
      `${API_BASE_URL}${endPoint}${queryParams}`
    );
  }
}
