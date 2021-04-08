import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { FBUser } from 'src/app/models/FBUser';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
//import {AngularFireAuth} from '@angular/fire/auth';
import { FormBuilder, FormGroup } from "@angular/forms";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  downloadUrl?: string;

  formDisplayName: FormGroup;
  formCustomClaims: FormGroup;

  bool: Boolean = false;

  logs: any;

  @Input() user?: FBUser;

  constructor(private formBuilder: FormBuilder, private afStorage: AngularFireStorage, private userService: UserService, 
    public authService: AuthService, private route: ActivatedRoute) {
      this.formDisplayName = this.formBuilder.group({
        firstName: '',
        lastName: '',

      })

      this.formCustomClaims = this.formBuilder.group({
        role: '',
        group: ''
      })
      

   }

  download() {
    
    this.afStorage.ref('/thug-doge.png').getDownloadURL()
    .subscribe(url => this.downloadUrl = url);
    
    //console.log(this.afStorage.ref('/thug-doge.png').getDownloadURL());
  }


  getUser() {
    if(this.user != null) {
      console.log("user")
      this.getUserFromInput();
    }
    else this.getUserFromURL();

  }


  getUserFromInput() {

    this.userService.getUserByID(this.user?.uid)
    .subscribe(data => {this.user = data}, err => console.log(err), () => console.log(this.user));
  }

  getUserFromURL() {

    let uID = this.route.snapshot.paramMap.get('id');
    this.userService.getUserByID(uID).pipe(first())
    .subscribe(data => {this.user = data}, err => console.log(err), () => this.getUserLogs());
  }

  setClaims(user: FBUser) {

    this.userService.setClaim(user)
    .subscribe(data => {console.log(data)}, err => console.log(err), () => console.log("fisnished"));
  }

  updateCustomClaims() {


    var role = this.formCustomClaims.get('role')?.value;
    // var group = this.formCustomClaims.get('group')?.value;
    var customClaims: any = {}
    
    customClaims['role'] = role;
    // customClaims['group'] = group;
    
    let user: FBUser = new FBUser();

    user.uid = this.user?.uid;
    user.customClaims = customClaims;

    this.userService.setClaim(user).subscribe(data => {console.log(data)}, err => console.log(err), () => console.log("fisnished"));

  }
    
  updateDisplayName() {

    let firstName = this.formDisplayName.get('firstName')?.value;
    let lastName = this.formDisplayName.get('lastName')?.value;
    let user: FBUser = new FBUser();
    user.uid = this.user?.uid;
    user.displayName = firstName + ' ' + lastName;

    this.userService.updateDisplayName(user)
    .subscribe(data => {console.log(data)}, err => console.log(err), () => console.log("fisnished"));
  }

  getUserLogs() {
    if (this.user?.uid) {
    console.log('test')
    this.userService.getUserLogs(this.user?.uid)
    .subscribe(data => {this.logs = data}, err => console.log(err), () => console.log(this.logs))
    }
  }



  ngOnInit(): void {

    //this.getUserFromURL();
    this.getUser();
    this.download();
    //this.getUserLogs();

  }

}
