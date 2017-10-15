import { User } from './user/user.model';
import { DayListItem } from './../planner/day-plan/day-plan-list/day-list-item/day-list-item.model';
import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService implements OnInit {

    constructor(private http: Http) {}

    loginStatusUpdated = new EventEmitter<string>();
    userListUpdated = new EventEmitter<User[]>();
    userAdded = new EventEmitter<User>();

    private currentUser: User = new User('test', 'test', 'test');
    private loginStatus = 'logged-out';

    private userArray: User[] = [];

    ngOnInit(): void {
        console.log('user service init');
    }

    getLoginStatus() {
        return this.loginStatus;
    }
    onAddUser(user: User) {
        this.userArray.push(user);
        this.currentUser = user;
        this.storeUsers();
    }
    setLoginStatus(status: string) {
        this.loginStatus = status;
        console.log(status);
    }
    getCurrentUser() {
        return this.currentUser;
    }

    storeUsers() {
        console.log(this.userArray);
        return this.http.put('https://vanillaplanner-51d34.firebaseio.com/users.json',
        this.userArray)
        .subscribe(
        (response: Response) => {
          console.log('successs');
        }
      );
    }
    getUsers() {
        return this.userArray;
    }
    getUserArray() {
        this.http.get('https://vanillaplanner-51d34.firebaseio.com/users.json')
        .subscribe(
         (response: Response) => {
            this.userArray = response.json();
            console.log(response.json());
            const username: String = response.json()[0].username;
            const password: String = response.json()[0].password;
            const email:    String = response.json()[0].email;

            const user: User = new User(username, password, email);

            const todos: DayListItem[] = response.json()[0].dayplans;
            for (let i = 0; i < todos.length; i++) {
                console.log(todos[i]);
            }

            this.userListUpdated.emit(this.userArray);
            this.currentUser = user;
          }
        );
        console.log(this.currentUser);
    }

    setCurrentUser(user: User) {
        this.currentUser = user;
    }

    addPlanToCurrentUser(item: DayListItem) {
         if (this.currentUser == null) {
            this.currentUser = new User('1', '2', '3');
            console.log('current user is null');
         }
        console.log(this.currentUser);
        this.currentUser.addDayPlan(item);
        this.storeUsers();
    }
    updateCurrentUser() {
        console.log('updating...');
    }

    printCurrentUser() {
        console.log(this.currentUser);
    }

}
