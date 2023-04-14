import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JeriSchoolService {
  constructor(private httpClient: HttpClient) {}

  getCardId(): string {
    return '042072D2E47580';
  }

  getSatBalance(): number {
    return 16620;
  }
}
