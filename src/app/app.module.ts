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
