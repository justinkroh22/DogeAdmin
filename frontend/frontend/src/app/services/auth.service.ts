import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { UserMetadata, User } from '@firebase/auth-types';

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { from, Observable, UnaryFunction } from 'rxjs';
import firebase from 'firebase/app';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }




  isLoggedIn() {

    return this.afAuth.user;
  }

  getToken() {

    return this.afAuth.idToken;
  }




  /**
 * Deprecated Methods
 * */
  async getSyncUser(): Promise<User | null> {
    return await this.afAuth.user.pipe(first()).toPromise();

  }

  getTokenObservable() {

    return from(this.getSyncToken());
  }

  async getSyncToken(): Promise<string | null | undefined> {

    return await this.afAuth.idToken.pipe(first()).toPromise();

  }

  async getSyncIDTokenResult() {
    let user = await this.getSyncUser();
   return await user?.getIdTokenResult();
  }

  async getSyncUID(): Promise<string | null | undefined> {

    return await this.afAuth.user.pipe(first()).toPromise().then(user => user?.uid);
 
   }

  async getSyncDisplayName(): Promise<string | null | undefined> {

    return await this.afAuth.user.pipe(first()).toPromise().then(user => user?.displayName);

   }

   async getSyncEmail(): Promise<string | null | undefined> {

    return await this.afAuth.user.pipe(first()).toPromise().then(user => user?.email);

   }

   async getSyncMetaData(): Promise<string | UserMetadata | null | undefined> {

    return await this.afAuth.user.pipe(first()).toPromise().then(user => user?.metadata);

   }


  login(): void {
    this.router.navigate(['/']);
  }

  logout(): void {

    this.router.navigate(['/login']);
    this.afAuth.signOut();

  }





}
