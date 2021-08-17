import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './mtek/customer-add/customer-add.component';
import { CustomerEditComponent } from './mtek/customer-edit/customer-edit.component';
import { CustomerListComponent } from './mtek/customer-list/customer-list.component';
import { DashboardComponent } from './mtek/dashboard/dashboard.component';
import { ProductAllBranchComponent } from './mtek/product-all-branch/product-all-branch.component';
import { ProductCreateComponent } from './mtek/product-create/product-create.component';
import { ProductEditComponent } from './mtek/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: 'mtek',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'stockAllBranch/:pcd', component: ProductAllBranchComponent },
      { path: 'product-create', component: ProductCreateComponent },
      { path: 'product-edit/:pcd', component: ProductEditComponent },
      { path: 'customer-all', component: CustomerListComponent },
      { path: 'customer-add', component: CustomerAddComponent },
      { path: 'customer-edit/:cusid', component: CustomerEditComponent },
    ],
  },
  { path: '**', redirectTo: 'mtek' },
  { path: '', redirectTo: 'mtek', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
