import { User } from './../user/user.model';
import { UserService } from './../users.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @Output() pageSelected = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loadUsers();
  }

  onSubmit() {
    const user = new User(this.signupForm.value.username, this.signupForm.value.password, this.signupForm.value.email);
    this.userService.onAddUser(user);

    this.promiseExample();
  }

  promiseExample(): Promise<any> {
    return new Promise((resolve) => {
      this.userService.loginAttempt(this.signupForm.value.username, this.signupForm.value.password );
      setTimeout(() => { // simulate a server delay
        this.pageSelected.emit('planner');
        }, 500);
    });
  }

}
