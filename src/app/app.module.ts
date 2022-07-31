import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodItemComponent } from './component/public/food-item/food-item.component';
import { BoissonItemComponent } from './component/public/boisson-item/boisson-item.component';
import { CofeItemComponent } from './component/public/cofe-item/cofe-item.component';
import { DashboardComponent } from './component/private/dashboard/dashboard.component';
import { SideBarComponent } from './component/private/side-bar/side-bar.component';
import { TopBarComponent } from './component/private/top-bar/top-bar.component';
import { MessagesComponent } from './component/private/messages/messages.component';
import { AddFoodComponent } from './component/private/food/add-food/add-food.component';
import { FoodListComponent } from './component/private/food/food-list/food-list.component';
import { UpdateFoodComponent } from './component/private/food/update-food/update-food.component';
import { ToastrModule } from 'ngx-toastr';
import { MessageList2Component } from './component/private/messages/message-list2/message-list2.component';
import { BoissonListComponent } from './component/private/boisson/boisson-list/boisson-list.component';
import { AddBoissonComponent } from './component/private/boisson/add-boisson/add-boisson.component';
import { UpdateBoissonComponent } from './component/private/boisson/update-boisson/update-boisson.component';
import { CofeListComponent } from './component/private/cofes/cofe-list/cofe-list.component';
import { AddCofeComponent } from './component/private/cofes/add-cofe/add-cofe.component';
import { UpdateCofeComponent } from './component/private/cofes/update-cofe/update-cofe.component';
import { UsersComponent } from './component/private/users/users.component';

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
    FoodItemComponent,
    BoissonItemComponent,
    CofeItemComponent,
    DashboardComponent,
    SideBarComponent,
    TopBarComponent,
    MessagesComponent,
    AddFoodComponent,
    FoodListComponent,
    UpdateFoodComponent,
    MessageList2Component,
    BoissonListComponent,
    AddBoissonComponent,
    UpdateBoissonComponent,
    CofeListComponent,
    AddCofeComponent,
    UpdateCofeComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), 
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
