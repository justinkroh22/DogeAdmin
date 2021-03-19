import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { TablerowComponent } from './components/tablerow/tablerow.component';
import { UserviewComponent } from './components/userview/userview.component';
import { CreateuserComponent } from './components/createuser/createuser.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserPipe } from './pipes/user.pipe';
import { UsertableComponent } from './components/usertable/usertable.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',

  signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '',
  privacyPolicyUrl: '',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    NavbarComponent,
    TablerowComponent,
    UserviewComponent,
    CreateuserComponent,
    UserPipe,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
