import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { OverlayModule } from '@angular/cdk/overlay';

import { SideNavComponent } from './side-nav/side-nav.component';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import { httpInterceptorProvider } from './interceptors';

import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './mtek/dashboard/dashboard.component';
import { BranchInventoryComponent } from './mtek/branch-inventory/branch-inventory.component';
import { ProductTransferComponent } from './mtek/product-transfer/product-transfer.component';
import { ProductAllBranchComponent } from './mtek/product-all-branch/product-all-branch.component';
import { ProductCreateComponent } from './mtek/product-create/product-create.component';
import { ProductEditComponent } from './mtek/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    StockHomeComponent,
    StockCreateComponent,
    StockEditComponent,
    ProgressbarComponent,
    LoginComponent,
    DashboardComponent,
    BranchInventoryComponent,
    ProductTransferComponent,
    ProductAllBranchComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    FormsModule,
    HttpClientModule,

    ChartsModule,
    MaterialModule,
    NgApexchartsModule,
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
