import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';
import { UserMetadata, User, IdTokenResult } from '@firebase/auth-types';
import { CustomFirebaseUserClass} from 'src/app/models/CustomFirebaseUserClass';
import { FBUser} from 'src/app/models/FBUser';
import { map } from 'rxjs/operators';
import { SendClaim } from '../models/SendClaim';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  httpOptions: any = {
    observe: 'response'
  };


  getUserByID(uid: any) {

    return this.http.get<FBUser>(environment.apiUrls.getUserById + uid)
    .pipe(map((userdata: any) => {

      let user: FBUser = new FBUser(userdata.uid, userdata.disabled, userdata.displayName, userdata.email, userdata.customClaims, userdata.phoneNumber, userdata.emailVerified, userdata.photoUrl, userdata.providerId, userdata.tenantId, userdata.userMetadata);
      console.log(user);
        return user;
      })
    );
  }

  getAllUsers() {

    return this.http.get<FBUser[]>(environment.apiUrls.getAllUsers)
    .pipe(map((resp:any) => {
      return resp.map((userdata: any) => {

      let user: FBUser = new FBUser(userdata.uid, userdata.disabled, userdata.displayName, userdata.email, userdata.customClaims, userdata.phoneNumber, userdata.emailVerified, userdata.photoUrl, userdata.providerId, userdata.tenantId, userdata.userMetadata);

        return user;
      })
    }));
  }

  setClaim(user: FBUser) {

    return this.http.post<any>(environment.apiUrls.setClaims, user, this.httpOptions);

  }

  updateDisplayName(user: FBUser) {

    return this.http.post<any>(environment.apiUrls.updateDisplayName, user, this.httpOptions);

  }

  createUser(user: FBUser) {

    return this.http.post<any>(environment.apiUrls.createUser, user, this.httpOptions);

  }

  deleteUser(uid: string) {

    return this.http.delete<any>(environment.apiUrls.deleteUserById + uid, this.httpOptions);
  }

  resetPassword(email: string) {

    return this.http.post<any>(environment.apiUrls.resetPassword, email, this.httpOptions);

  }

  enableUser(uid: string) {

    return this.http.post<any>(environment.apiUrls.enableUser, uid, this.httpOptions);
    
  }


  disableUser(uid: string) {

    return this.http.post<any>(environment.apiUrls.disableUser, uid, this.httpOptions);

  }



}
