import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', children: [
    {path: '', component: UserListComponent},
    {path: 'form', component: UserFormComponent},
    {path: 'form/:nome', component: UserFormComponent}
  ]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }