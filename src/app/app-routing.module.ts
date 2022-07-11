import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingComponent } from './component/private/account-setting/account-setting.component';
import { OrderSuccessComponent } from './component/private/order-success/order-success.component';
import { BoissonsComponent } from './component/public/boissons/boissons.component';
import { ContactComponent } from './component/public/contact/contact.component';
import { FoodComponent } from './component/public/food/food.component';
import { ForgetPasswordComponent } from './component/public/forget-password/forget-password.component';
import { HomeComponent } from './component/public/home/home.component';
import { HowItWorkComponent } from './component/public/how-it-work/how-it-work.component';
import { LoginComponent } from './component/public/login/login.component';
import { MenuComponent } from './component/public/menu/menu.component';
import { NosCofesComponent } from './component/public/nos-cofes/nos-cofes.component';
import { Page404Component } from './component/public/page404/page404.component';
import { RegisterComponent } from './component/public/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'boissons',
    component: BoissonsComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
  ,
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  }
  ,
  {
    path: 'nos-cofes',
    component: NosCofesComponent
  },
  {
    path: 'account-setting',
    component: AccountSettingComponent
  }
  ,
  {
    path: 'how-it-work',
    component: HowItWorkComponent
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
