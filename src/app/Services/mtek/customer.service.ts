import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerModel } from 'src/app/models/mtek/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getCustomer(): Observable<CustomerModel[]> {
    return this.httpClient
      .get<CustomerModel[]>('Customer/GetCustomer')
      .pipe(map((result: any) => result.data));
  }

  getCustomerById(cusid: string): Observable<CustomerModel[]> {
    return this.httpClient
      .get<CustomerModel[]>(`Customer/GetCustomerById?cusid=${cusid}`)
      .pipe(map((result: any) => result.data));
  }

  addNewCustomer(model: CustomerModel): Observable<any> {
    return this.httpClient.post<any>('Customer/AddNewCustomer', model);
  }

  putCustomerManagement(model: CustomerModel): Observable<any> {
    return this.httpClient.post<any>('Customer/PostManageCustomer', model);
  }

}
