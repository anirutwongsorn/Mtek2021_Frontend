import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
