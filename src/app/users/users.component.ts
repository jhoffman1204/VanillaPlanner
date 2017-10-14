import { User } from './user/user.model';
import { UserService } from './users.service';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy  {

  private userArray: User[] = [
        new User('test', 'test', 'test', 'test'),
        new User('hello', 'world', 'test', 'test')
    ];

  constructor(private userService: UserService) {

   }

  private loginStatus = this.userService.getLoginStatus();

  ngOnInit() {
    this.userService.loginStatusUpdated.subscribe(
      (status: string) => {
        this.loginStatus = status;
        console.log(this.loginStatus);
      }
    );

    this.userService.userListUpdated.subscribe(
      (array: User[]) => {
        this.userArray = array;
        console.log(this.userArray);
      }
    );
  }

  ngOnDestroy() {
  // if ( this.userService.loginStatusUpdated) {
  //   this.userService.loginStatusUpdated.unsubscribe();
  // }
}

  onGetUsers() {
    this.userService.getUser();
  }

  onSaveUsers() {
    this.userService.storeUsers()
      .subscribe(
        (response: Response) => {
          console.log('successs');
        }
      );
  }

  onPrintUser() {
    this.userService.printCurrentUser();
  }
}
