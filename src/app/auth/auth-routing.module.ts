import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
      
    ]
  },
  {
    path: 'register',
    component: RegisterUserComponent,
    children: [
      {
        path: 'register',
        component: RegisterUserComponent
      }
      
    ]
  },
  {
    path: 'forgot',
    component: ForgetPassComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
