import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsRoutingModule } from './products.routing';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent
  ],
  exports:[
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
