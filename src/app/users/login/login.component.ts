import { UserService } from './../users.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') addItemForm: NgForm;
  @Output() pageSelected = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.loginStatusUpdated.emit('logged-in');
    // this.userService.loginAttempt(this.addItemForm.value.username, this.addItemForm.value.password );

    this.promiseExample();

  }

  promiseExample(): Promise<any> {
    return new Promise((resolve) => {
      this.userService.loginAttempt(this.addItemForm.value.username, this.addItemForm.value.password );
      setTimeout(() => { // simulate a server delay
        this.pageSelected.emit('planner');
        }, 500);
    });
  }

}
