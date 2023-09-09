import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ChekoutComponent } from './components/chekout/chekout.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { authGuardGuard, isLoggedIn } from './auth-guard.guard';
import { InformationeComponent } from './components/informatione/informatione.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' , },
  {path:"dashboard", component: DashboardComponent, title: 'Dashboard' , canActivate: [authGuardGuard] },
  {path:'home', component: HomeComponent, title: 'Home'},
  { path: 'login', component: LoginComponent,canActivate: [isLoggedIn], title: 'Login' },
  {path: "signup" , component: SingupComponent,canActivate: [isLoggedIn], title: "Signup"},
  {path: "product/:id", component: ProductDetailsComponent , title: "Product Details"},
  {path:"checkout", component: ChekoutComponent, canActivate: [authGuardGuard] , title: "Checkout"},
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'search', component: SearchComponent, title: 'Search' },
   {path:"info", component: InformationeComponent , canActivate: [authGuardGuard], title: "Information"},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
