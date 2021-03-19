import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserMetadata, User, IdTokenResult } from '@firebase/auth-types';
import { CustomFirebaseUserClass } from 'src/app/models/CustomFirebaseUserClass';
import { FBUser} from 'src/app/models/FBUser';
import { keyframes } from '@angular/animations';
import { SendClaim } from 'src/app/models/SendClaim';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userService: UserService, public authService: AuthService) { }


  ngOnInit(): void {

  }


}
