import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingComponent } from './component/private/account-setting/account-setting.component';
import { DashboardComponent } from './component/private/dashboard/dashboard.component';
import { AddFoodComponent } from './component/private/food/add-food/add-food.component';
import { FoodListComponent } from './component/private/food/food-list/food-list.component';
import { UpdateFoodComponent } from './component/private/food/update-food/update-food.component';
import { MessageList2Component } from './component/private/messages/message-list2/message-list2.component';
import { MessagesComponent } from './component/private/messages/messages.component';
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
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'food-list',
    component: FoodListComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'add-food',
    component: AddFoodComponent
  },
  {
    path: 'update-food',
    component: UpdateFoodComponent
  },
  {
    path: 'messages/:id',
    component: MessageList2Component
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
