import { Injectable } from '@angular/core';
import { IBtc_Brl } from '../interfaces/coingecko';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoService {
  constructor(private httClient: HttpClient) {}

  getBTC_BRL(): Promise<IBtc_Brl | undefined> {
    const endPoint: string =
      '/simple/price?ids=bitcoin&vs_currencies=brl&include_last_updated_at=true&precision=4';
    const response = this.httClient
      .get<IBtc_Brl>(`${API_BASE_URL}${endPoint}`)
      .toPromise();

    return response;
  }
}
