import { DayListItem } from './../../planner/day-plan/day-plan-list/day-list-item/day-list-item.model';
import { DayPlan } from './../../planner/day-plan/day-plan.model';
export class User {

  private username: String;
  private password: String;
  private firstName: String;
  private lastName: String;
  private dayplans: DayListItem[];


  constructor(username: String, password: String, firstName: String, lastName:  String) {
      this.username = username;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.dayplans = [];
   }

   addDayPlan(dayplan: DayListItem) {
       this.dayplans.push(dayplan);
   }



}
