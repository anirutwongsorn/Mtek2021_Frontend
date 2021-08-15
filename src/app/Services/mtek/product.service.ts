import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductGroup } from 'src/app/models/mtek/productGroup';
import { ProcuctLocalModel } from 'src/app/models/mtek/productLocal';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductGroup(): Observable<ProductGroup[]> {
    return this.httpClient
      .get<ProductGroup[]>('Product/GetProductGroup')
      .pipe(map((result: any) => result.data));
  }

  getProductById(pcd: string): Observable<ProcuctLocalModel[]> {
    return this.httpClient
      .get<ProcuctLocalModel[]>('Product/GetProductById?pcd=' + pcd)
      .pipe(map((result: any) => result.data));
  }

  postAddnewProduct(model: ProcuctLocalModel): Observable<any> {
    return this.httpClient
      .post<any>('Product/PostAddNewProduct', this.makeFormData(model));
  }

  putManageProduct(model: ProcuctLocalModel): Observable<any> {
    return this.httpClient
      .put<any>('Product/PutManageProduct', this.makeFormData(model));
  }

  makeFormData(product: ProcuctLocalModel): FormData {
    var frmData = new FormData();
    frmData.append('Pcd', product.pcd);
    frmData.append('Pdesc', product.pdesc);
    frmData.append('Gpcd', product.gpcd.toString());
    frmData.append('Uom', product.uom);
    frmData.append('Blqty', product.blqty.toString());
    frmData.append('Stock', product.stock.toString());
    frmData.append('PrcCost', product.prcCost.toString());
    frmData.append('PrcSale', product.prcSale.toString());
    frmData.append('FormFiles', product.images);
    return frmData;
  }
}
