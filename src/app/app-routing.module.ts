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
import {MyOrdersComponent} from "./account/account-dashboard/my-orders/my-orders.component";
import {TrackMyOrderComponent} from "./account/account-dashboard/track-my-order/track-my-order.component";
import {MyPaymentOptionsComponent} from "./account/account-dashboard/my-payment-options/my-payment-options.component";
import {AddressBookComponent} from "./account/account-dashboard/address-book/address-book.component";
import {ProfileComponent} from "./account/account-dashboard/profile/profile.component";
import {
  ReturnsCancellationsComponent
} from "./account/account-dashboard/returns-cancellations/returns-cancellations.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {OverviewComponent} from "./admin-panel/components/overview/overview.component";
import {SalesComponent} from "./admin-panel/components/sales/sales.component";
import {
  SecurityPermissionsComponent
} from "./admin-panel/components/security-permissions/security-permissions.component";
import {SystemConfigComponent} from "./admin-panel/components/system-config/system-config.component";
import {ProductManagementComponent} from "./admin-panel/components/product-management/product-management.component";


const routes: Routes = [
  { path: '', redirectTo: '/newarrivals', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newarrivals', component: NewArrivalsComponent },
  { path: 'todaydeals', component: TodayDealsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'quick-look', component: QuickLookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'dashboard', component: AccountDashboardComponent},
  { path: 'mypaymentoptions', component: MyPaymentOptionsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'myorders', component: MyOrdersComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'returnscancellations', component: ReturnsCancellationsComponent },
  { path: 'addressbook', component: AddressBookComponent },
  { path: 'trackmyorder', component: TrackMyOrderComponent },
  { path: 'adminpanel', component: AdminPanelComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'products', component: ProductManagementComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'security', component: SecurityPermissionsComponent },
      { path: 'systemconfig', component: SystemConfigComponent },
    ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
