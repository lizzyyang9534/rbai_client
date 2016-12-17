import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ LoginComponent } from './login/login.component';
import{ HomeComponent } from './home/home.component';
import{ MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'members',
    component: MembersComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
