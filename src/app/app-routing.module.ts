import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MonettransComponent } from './monettrans/monettrans.component';
import { MoneyGuard } from './money.guard';
import { PasschangeComponent } from './passchange/passchange.component';
import { PinchangeComponent } from './pinchange/pinchange.component';
import { RegisterComponent } from './register/register.component';
import { ServiceGuard } from './service.guard';

const routes: Routes = [{
  path:'login',component:LoginComponent
},
{
  path:'dashboard',component:DashboardComponent,canActivate:[ServiceGuard]
},
{
  path:'moneytrans',component:MonettransComponent,canActivate:[MoneyGuard]
},
{
  path:'passchange',component:PasschangeComponent,canActivate:[MoneyGuard]
},
{
  path:'pinchange',component:PinchangeComponent,canActivate:[MoneyGuard]
},
{
  path:'register',component:RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent,MonettransComponent]