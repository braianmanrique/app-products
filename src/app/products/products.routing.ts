import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [  
    {
      path: 'dashboard',
      children: [
        {
            path: '', component: DashboardComponent
        },
        {
            path: 'new-product', component: ProductsComponent
          },
      ]
  },
 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
