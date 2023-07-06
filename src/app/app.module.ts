import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NofoundpageComponent } from './pages/nofoundpage/nofoundpage.component';
import { ProductsModule } from './products/products.module';
import { TableComponent } from './productos/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NofoundpageComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
