import { UserService } from './../../../../users/users.service';
import { Component, OnInit, Input } from '@angular/core';
import { DayListItem } from './day-list-item.model';

@Component({
  selector: 'app-day-list-item',
  templateUrl: './day-list-item.component.html',
  styleUrls: ['./day-list-item.component.css']
})
export class DayListItemComponent implements OnInit {

  @Input() dayplan: DayListItem;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSelected() {
    console.log(this.dayplan.itembody);
    this.dayplan.setCompleted();
  }

  onDelete() {
    this.userService.deletePlan(this.dayplan.getID());
  }

}
