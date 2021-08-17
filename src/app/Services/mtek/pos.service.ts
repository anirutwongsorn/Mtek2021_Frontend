import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PosBillModel } from 'src/app/models/mtek/posbill';

@Injectable({
  providedIn: 'root',
})
export class PosService {
  constructor(private httpClient: HttpClient) {}

  postSale(model: PosBillModel): Observable<any> {
    return this.httpClient.post<any>('Pos/PostPosSale', model);
  }
}
