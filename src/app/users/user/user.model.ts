import { DayListItem } from './../../planner/day-plan/day-plan-list/day-list-item/day-list-item.model';
import { DayPlan } from './../../planner/day-plan/day-plan.model';
export class User {

  private username: String;
  private password: String;
  private email: String;
  private lastName: String;
  private dayplans: DayListItem[];


  constructor(username: String, password: String, email: String) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.dayplans = [];
   }

   addDayPlan(dayplan: DayListItem) {
       this.dayplans.push(dayplan);
   }

   getUserDayPlans() { // will be called by the day-plan-list module
       return this.dayplans;
   }



}
