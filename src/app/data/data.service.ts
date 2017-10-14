import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../users/user/user.model';

@Injectable()
export class DataService {
    constructor(private http: Http) {}

    private currentUser: User;

    private userArray: User[] = [

    ];

    storeUsers() {
        return this.http.put('https://vanillaplanner-51d34.firebaseio.com/users.json',
        this.userArray);
    }

    getUser() {
        this.http.get('https://vanillaplanner-51d34.firebaseio.com/users.json')
        .subscribe(
         (response: Response) => {
            this.userArray = response.json();
            console.log(response.json());
          }
        );
    }
}
