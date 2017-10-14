import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  private currentPage: String;

  constructor() { }

  ngOnInit() {

  }

  onSelect(pageName: string) {
    this.pageSelected.emit(pageName);
  }

}
