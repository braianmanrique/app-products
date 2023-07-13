import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsRoutingModule } from './products.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogoPipe } from './pipes/logo.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    LogoPipe
  ],
  exports:[
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ProductsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
