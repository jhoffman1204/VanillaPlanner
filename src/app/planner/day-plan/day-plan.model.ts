import { DayPlanList } from './day-plan-list/day-plan-list.model';
export class DayPlan {

  date: string;
  dayPlanList: DayPlanList;

  constructor(date: string) {
      this.date = date;
   }

   setDayPlanList(list: DayPlanList) {
     this.dayPlanList = list;
   }
}

