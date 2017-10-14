import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private pageSelected: string;

  onNavigate(page: string) {
    this.pageSelected = page;
  }


}
