import { User } from './user/user.model';
import { UserService } from './users.service';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  private userArray: User[] = [];

  constructor(private userService: UserService) {

   }

  private loginStatus = this.userService.getLoginStatus();

  ngOnInit() {

    // this.userService.userListUpdated.emit(this.userService.getUserArray());

    this.userArray = this.userService.getUsers();

    this.userService.loginStatusUpdated.subscribe(
      (status: string) => {
        this.loginStatus = status;
        console.log(this.loginStatus);
      }
    );

    this.userService.userListUpdated.subscribe(
      (array: User[]) => {
        this.userArray = array;
      }
    );
  }

  ngOnLoad() {
    console.log('this ran');
  }

  ngOnDestroy() {
  // if ( this.userService.loginStatusUpdated) {
  //   this.userService.loginStatusUpdated.unsubscribe();
  // }
}

  // called by the html component when the button is pressed
  onGetUsers() {
    this.userService.getUserArray();
    console.log('get users button hit');
  }

  onGetSpecificUser() {
    this.userService.updateCurrentUser();
  }

}
