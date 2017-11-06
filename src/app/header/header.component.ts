import { UserService } from './../users/users.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  private currentPage: String;
  private loginStatus = 'logged-out';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loginStatusUpdated.subscribe(
      (status: string) => {
        this.loginStatus = status;
        console.log(this.loginStatus);
      }
    );
  }

  getLoginStatus() {
    return this.loginStatus;
  }

  onSelect(pageName: string) {
    if (pageName === 'logout') {
      this.loginStatus = 'logged-out';
    }
    this.pageSelected.emit(pageName);
  }

}
