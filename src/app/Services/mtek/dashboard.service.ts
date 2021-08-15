import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProcuctBranchModel } from 'src/app/models/mtek/productBranch';
import { ProcuctLocalModel } from 'src/app/models/mtek/productLocal';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  GetLocalProduct(): Observable<ProcuctLocalModel[]> {
    return this.httpClient
      .get<ProcuctLocalModel[]>('Product/GetLocalProduct')
      .pipe(map((result: any) => result.data));
  }

  GetProductAllBranch(pcd: string): Observable<ProcuctBranchModel[]> {
    return this.httpClient
      .get<ProcuctBranchModel[]>('Product/GetAllProductBranch?pcd=' + pcd)
      .pipe(map((result: any) => result.data));
  }
}
