import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { PopularComponent } from './components/popular/popular.component';
import { ProductComponent } from './components/product/product.component';
import { PopularCatComponent } from './components/popular-cat/popular-cat.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { ChekoutComponent } from './components/chekout/chekout.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { PricePipePipe } from './pipes/price-pipe.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { InformationeComponent } from './components/informatione/informatione.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    FilterComponent,
    PopularComponent,
    ProductComponent,
    PopularCatComponent,
    ProductDetailsComponent,

    ChekoutComponent,
     CartComponent,
     SearchComponent,
     PricePipePipe,
     FooterComponent,
     InformationeComponent,
     DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
