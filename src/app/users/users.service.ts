import { User } from './user/user.model';
import { DayListItem } from './../planner/day-plan/day-plan-list/day-list-item/day-list-item.model';
import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class UserService implements OnInit {

    constructor(private http: HttpClient) {}

    loginStatusUpdated = new EventEmitter<string>();
    userListUpdated = new EventEmitter<User[]>();
    userAdded = new EventEmitter<User>();

    private currentUser: User = new User('test', 'test', 'test');
    private loginStatus = 'logged-out';

    private currentUserIndex = -1;

    private userArray: User[] = [];

    ngOnInit(): void {

    }

    loginAttempt(username: String, password: String) {
        this.http.get<User[]>('https://vanillaplanner-51d34.firebaseio.com/users.json')
        .map(
            (tempUserArray) => {
                const users: User[] = tempUserArray;
                // tslint:disable-next-line:prefer-const
                for (let user of users){
                    if (!user['dayplans']) {
                        user['dayplans'] = [];
                    }
                    if (!user['email']) {
                        user['email'] = 'default';
                    }
                    if (!user['maxID']) {
                        user['maxID'] = 0;
                    }
                }
            return users;
          }
        )
        .subscribe(
         (tempUserArray) => {
            this.userArray = tempUserArray;
            let index = -1;

            for (let i = 0; i < tempUserArray.length; i++) {
                if (tempUserArray[i] !== null) {  // this doesn't help
                    const s: String = tempUserArray[i].username;
                    const p: String = tempUserArray[i].password;
                    if (s === username && p === password) {
                        index = i;
                        this.currentUserIndex = i;
                    }
                }
            }

            if (index === -1) {
                return 0;
            }

            const Jusername: String = tempUserArray[index].username;
            const Jpassword: String = tempUserArray[index].password;
            const Jemail:    String = tempUserArray[index].email;

            const user: User = new User(Jusername, Jpassword, Jemail);

            const todos: DayListItem[] = tempUserArray[index].dayplans;

            if (todos) {
                for (let i = 0; i < todos.length; i++) {
                    user.addDayPlan(todos[i].itembody, todos[i].id );
                }
            }

               this.userListUpdated.emit(this.userArray);
               this.loginStatusUpdated.emit('logged-in');
               this.currentUser = user;
               this.userArray[this.currentUserIndex] = user;

          }
        );
        return 1;
    }
    loadUsers() {
        this.http.get<User[]>('https://vanillaplanner-51d34.firebaseio.com/users.json')
        .map(
            (tempUserArray) => {
                const users: User[] = tempUserArray;
                // tslint:disable-next-line:prefer-const
                for (let user of users){
                    if (!user['dayplans']) {
                        user['dayplans'] = [];
                    }
                    if (!user['email']) {
                        user['email'] = 'default';
                    }
                    if (!user['maxID']) {
                        user['maxID'] = 0;
                    }
                }
            return users;
          }
        )
        .subscribe(
         (tempUserArray) => {
            this.userArray = tempUserArray;
          }
        );
        return 1;
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
    }
    getCurrentUser() {
        return this.currentUser;
    }

    deletePlan(planID: number) {
        this.currentUser.deletePlan(planID);

    }

    storeUsers() {
        return this.http.put('https://vanillaplanner-51d34.firebaseio.com/users.json',
        this.userArray)
        .subscribe(
        (response: Response) => {

        }
      );
    }
    getUsers() {
        return this.userArray;
    }

    setCurrentUser(user: User) {
        this.currentUser = user;
    }

    addPlanToCurrentUser(item: String) {
         if (this.currentUser == null) {
            this.currentUser = new User('1', '2', '3');
         }
        this.currentUser.addNewDayPlan(item);
        this.storeUsers();
    }

}
