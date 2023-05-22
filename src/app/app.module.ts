import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatRadioModule} from "@angular/material/radio";
import { ProductsComponent } from './products/products.component';
import { TodayDealsComponent } from './today-deals/today-deals.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { MyAccountComponent } from './dashboard/my-account/my-account.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { QuickLookComponent } from './products/quick-look/quick-look.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './account/register/register.component';
import { PasswordRecoveryComponent } from './account/password-recovery/password-recovery.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { AccountDashboardComponent } from './account/account-dashboard/account-dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './account/account-dashboard/profile/profile.component';
import { AddressBookComponent } from './account/account-dashboard/address-book/address-book.component';
import { TrackMyOrderComponent } from './account/account-dashboard/track-my-order/track-my-order.component';
import { MyOrdersComponent } from './account/account-dashboard/my-orders/my-orders.component';
import { MyPaymentOptionsComponent } from './account/account-dashboard/my-payment-options/my-payment-options.component';
import { ReturnsCancellationsComponent } from './account/account-dashboard/returns-cancellations/returns-cancellations.component';
import { AddressAddComponent } from './account/account-dashboard/address-book/address-add/address-add.component';
import { AddressEditComponent } from './account/account-dashboard/address-book/address-edit/address-edit.component';
import { AccountHeaderComponent } from './account-header/account-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    TodayDealsComponent,
    NewArrivalsComponent,
    MyAccountComponent,
    QuickLookComponent,
    CartComponent,
    WishlistComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    SignInComponent,
    AccountDashboardComponent,
    CheckoutComponent,
    ProfileComponent,
    AddressBookComponent,
    TrackMyOrderComponent,
    MyOrdersComponent,
    MyPaymentOptionsComponent,
    ReturnsCancellationsComponent,
    AddressAddComponent,
    AddressEditComponent,
    AccountHeaderComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatDialogModule,
        MatGridListModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatMenuModule,
        MatDividerModule,
        MatTabsModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatRadioModule,
        MatGridListModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
