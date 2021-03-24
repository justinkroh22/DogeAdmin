import { Component, OnInit , Input} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserMetadata, User, IdTokenResult } from '@firebase/auth-types';
import { FBUser} from 'src/app/models/FBUser';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  constructor(private userService: UserService, public authService: AuthService) { }

  userList: FBUser[] = [];

  searchFilter: string = '';

  update(searchInput: any) {
    this.searchFilter = searchInput.value;
  }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers() {

    this.userService.getAllUsers()
    .subscribe(data => {this.userList = data}, err => console.log(err), () => console.log("User List Retrieved"));
  }
  


}
