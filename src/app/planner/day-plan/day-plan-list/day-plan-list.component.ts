import { DayListItem } from './day-list-item/day-list-item.model';
import { DayPlanList } from './day-plan-list.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DayPlanService } from '../day-plan.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-day-plan-list',
  templateUrl: './day-plan-list.component.html',
  styleUrls: ['./day-plan-list.component.css']
})
export class DayPlanListComponent implements OnInit {
  @ViewChild('f') addItemForm: NgForm;
  private dayplans: DayListItem[];

  private addedItemText: String;
  // injecting the service that was added in the providers of day-plan component
  constructor(private dayPlanService: DayPlanService) {
   }

  ngOnInit() {
    this.dayplans = this.dayPlanService.getDayPlans();
  }

  onSelected() {

  }

  onAddPlan() {
    // this.dayPlanService.addPlan();
  }

  onSubmit() {
    this.dayPlanService.addPlan(this.addItemForm.value.itemName);
    this.addItemForm.reset();
  }

}
