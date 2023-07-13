import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NofoundpageComponent } from './pages/nofoundpage/nofoundpage.component';
import { ProductsModule } from './products/products.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderPageComponent } from './pages/header-page/header-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NofoundpageComponent,

    HeaderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
