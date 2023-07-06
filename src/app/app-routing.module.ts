import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NofoundpageComponent } from './pages/nofoundpage/nofoundpage.component';
import { ProductsRoutingModule } from './products/products.routing';

const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  // {
  //   path: 'dashboard', component: DashboardComponent
  // },
  
  {
    path: '**', component: NofoundpageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
