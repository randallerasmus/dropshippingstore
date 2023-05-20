import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ProductsComponent} from "./products/products.component";
import {TodayDealsComponent} from "./today-deals/today-deals.component";
import {NewArrivalsComponent} from "./new-arrivals/new-arrivals.component";
import {QuickLookComponent} from "./products/quick-look/quick-look.component";
import {CartComponent} from "./cart/cart.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {AccountDashboardComponent} from "./account/account-dashboard/account-dashboard.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {SignInComponent} from "./account/sign-in/sign-in.component";
import {RegisterComponent} from "./account/register/register.component";


const routes: Routes = [

  { path: '', redirectTo: '/newarrivals', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newarrivals', component: NewArrivalsComponent },
  { path: 'todaydeals', component: TodayDealsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'quick-look', component: QuickLookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'account-dashboard', component: AccountDashboardComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'signin', component: SignInComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
