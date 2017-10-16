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

    private currentUserIndex = -1;

    private userArray: User[] = [];

    ngOnInit(): void {
        console.log('user service init');
    }

    loginAttempt(username: String, password: String) {
        // need to check this username against the ones in our database
        console.log(username);
        this.http.get('https://vanillaplanner-51d34.firebaseio.com/users.json')
        .subscribe(
         (response: Response) => {
            const tempUserArray = response.json();
            this.userArray = tempUserArray;
            let index = -1;

            for (let i = 0; i < tempUserArray.length; i++) {
                console.log(response.json()[i]);
                if (response.json()[i] !== null) {  // this doesn't help
                    const s: String = response.json()[i].username;
                    const p: String = response.json()[i].password;
                    if (s === username && p === password) {
                        index = i;
                        this.currentUserIndex = i;
                        console.log('user found');
                    }
                }
            }

            if (index === -1) {
                return 0;
            }

            const Jusername: String = response.json()[index].username;
            const Jpassword: String = response.json()[index].password;
            const Jemail:    String = response.json()[index].email;

            const user: User = new User(Jusername, Jpassword, Jemail);

            const todos: DayListItem[] = response.json()[index].dayplans;

            if (todos) {
                for (let i = 0; i < todos.length; i++) {
                    const dayItem: DayListItem = new DayListItem(todos[i].itembody);
                    user.addDayPlan(dayItem);
                }
            }

               this.userListUpdated.emit(this.userArray);
               this.currentUser = user;
               this.userArray[this.currentUserIndex] = user;

               console.log(user);

          }
        );
        return 1;
        // console.log(this.currentUser);
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
            const username: String = response.json()[0].username;
            const password: String = response.json()[0].password;
            const email:    String = response.json()[0].email;

            const user: User = new User(username, password, email);

            const todos: DayListItem[] = response.json()[0].dayplans;
            for (let i = 0; i < todos.length; i++) {
                const dayItem: DayListItem = new DayListItem(todos[i].itembody);
                user.addDayPlan(dayItem);
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

    addPlanToCurrentUser(item: String) {
         if (this.currentUser == null) {
            this.currentUser = new User('1', '2', '3');
         }
        const plan: DayListItem = new DayListItem(item);
        this.currentUser.addDayPlan(plan);
        this.storeUsers();
    }
    updateCurrentUser() {
        console.log('updating...');
    }

    printCurrentUser() {
        console.log(this.currentUser);
    }

}
