import { User } from './user/user.model';
import { DayListItem } from './../planner/day-plan/day-plan-list/day-list-item/day-list-item.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    loginStatusUpdated = new EventEmitter<string>();
    userListUpdated = new EventEmitter<User[]>();

    private currentUser: User = new User('test', 'test', 'test', 'test');
    private loginStatus = 'logged-out';

    private userArray: User[] = [
        new User('one', 'punch', 'man', 'test')
    ];

    private testUserArray: User[] = [
        new User('viki', 'okai', 'purple', 'idk'),
        new User('tahm', 'kench', '123', '456')
    ];

    getLoginStatus() {
        return this.loginStatus;
    }
    setLoginStatus(status: string) {
        this.loginStatus = status;
        console.log(status);
    }
    getCurrentUser() {
        return this.currentUser;
    }

    storeUsers() {
        return this.http.put('https://vanillaplanner-51d34.firebaseio.com/users.json',
        this.userArray);
    }

    getUser() {
        this.http.get('https://vanillaplanner-51d34.firebaseio.com/users.json')
        .subscribe(
         (response: Response) => {
            this.userArray = response.json();
            this.setCurrentUser(response.json()[0]);
          }
        );
        console.log(this.userArray);
        this.userListUpdated.emit(this.userArray);
    }

    setCurrentUser(user: User) {
        this.currentUser = user;
    }

    addPlanToCurrentUser() {
         if (this.currentUser == null) {
            this.currentUser = new User('1', '2', '3', '4');
            console.log('current user is null');
         }
        console.log(this.currentUser);
        this.currentUser.addDayPlan(
            new DayListItem('test')
        );
    }

    printCurrentUser() {
        console.log(this.currentUser);
    }

}
