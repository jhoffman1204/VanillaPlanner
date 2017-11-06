import { User } from './user/user.model';
import { UserService } from './users.service';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  private userArray: User[] = [];

  private dateObj: Date = new Date();

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

  getLoginStatus() {
    return this.loginStatus;
  }

  ngOnLoad() {
    console.log('this ran');
  }

  ngOnDestroy() {
  // if ( this.userService.loginStatusUpdated) {
  //   this.userService.loginStatusUpdated.unsubscribe();
  // }
}

  onGetSpecificUser() {

  }

}
