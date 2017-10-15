import { User } from './../user/user.model';
import { UserService } from './../users.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  onSubmit() {
    const user = new User(this.signupForm.value.username, this.signupForm.value.password, this.signupForm.value.email);
    this.userService.onAddUser(user);
  }

}
