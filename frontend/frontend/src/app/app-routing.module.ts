import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { UserviewComponent } from './components/userview/userview.component';
import { CreateuserComponent } from './components/createuser/createuser.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent, canActivate: [AngularFireAuthGuard]

},
{
  path:'create-user',
  component: CreateuserComponent, canActivate: [AngularFireAuthGuard]
},

{
  path:'user/:id',
  component: UserviewComponent, canActivate: [AngularFireAuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
