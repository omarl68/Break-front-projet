import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/public/home/home.component';
import { NavbarComponent } from './component/public/navbar/navbar.component';
import { FooterComponent } from './component/public/footer/footer.component';
import { MenuComponent } from './component/public/menu/menu.component';
import { BoissonsComponent } from './component/public/boissons/boissons.component';
import { FoodComponent } from './component/public/food/food.component';
import { ContactComponent } from './component/public/contact/contact.component';
import { LoginComponent } from './component/public/login/login.component';
import { RegisterComponent } from './component/public/register/register.component';
import { ForgetPasswordComponent } from './component/public/forget-password/forget-password.component';
import { NosCofesComponent } from './component/public/nos-cofes/nos-cofes.component';
import { Page404Component } from './component/public/page404/page404.component';
import { AccountSettingComponent } from './component/private/account-setting/account-setting.component';
import { HowItWorkComponent } from './component/public/how-it-work/how-it-work.component';
import { OrderSuccessComponent } from './component/private/order-success/order-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    BoissonsComponent,
    FoodComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    NosCofesComponent,
    Page404Component,
    AccountSettingComponent,
    HowItWorkComponent,
    OrderSuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
