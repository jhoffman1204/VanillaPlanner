import { UserService } from './../users.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') addItemForm: NgForm;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.loginStatusUpdated.emit('logged-in');
  }

}
