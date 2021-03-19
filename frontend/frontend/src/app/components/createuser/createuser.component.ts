import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { FBUser} from 'src/app/models/FBUser';






  /**
 * Handles user creation
 * */
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService) {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      usertype: '',
      role: '',
      group: ''
    })

   }

   submitForm() {

    var firstName = this.form.get('firstName')?.value;
    var lastName = this.form.get('lastName')?.value;
    var email = this.form.get('email')?.value;
    var password = this.form.get('password')?.value;
    var role = this.form.get('role')?.value;
    var group = this.form.get('group')?.value;

    // var userDict: any = {}
    var customClaims: any = {}
    
    // userDict['displayName'] = firstName + lastName;
    // userDict['email'] = email;
    // userDict['password'] = password;
    customClaims['role'] = role;
    customClaims['group'] = group;

    let user: FBUser = new FBUser();

    user.displayName = firstName + ' ' + lastName;
    user.email = email;
    user.customClaims = customClaims;

    this.userService.createUser(user)
    .subscribe((data => {console.log(data)}));

  }
  

  ngOnInit(): void {

  }

  createUser(user: FBUser) {

    this.userService.createUser(user)
    .subscribe(data => {console.log(data)}, err => console.log(err), () => console.log("fisnished"));
  }

}
