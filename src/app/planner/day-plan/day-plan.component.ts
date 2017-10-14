import { DayPlanService } from './day-plan.service';
import { DayPlan } from './day-plan.model';
import { DayPlanList } from './day-plan-list/day-plan-list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-plan',
  templateUrl: './day-plan.component.html',
  styleUrls: ['./day-plan.component.css']
})
export class DayPlanComponent implements OnInit {

  dayplan: DayPlan;

  constructor() {

  }

  ngOnInit() {

  }

}
