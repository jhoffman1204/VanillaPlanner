import { DayListItem } from './../../planner/day-plan/day-plan-list/day-list-item/day-list-item.model';
import { DayPlan } from './../../planner/day-plan/day-plan.model';
export class User {

  username: String;
  password: String;
  email: String;
  dayplans: DayListItem[];
  maxItemID = 1;

  constructor(username: String, password: String, email: String) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.dayplans = [];
   }

   addDayPlan(dayplan: String, id: number) {
       const plan: DayListItem = new DayListItem(dayplan , id);
       this.maxItemID = this.maxItemID + 1;
       this.dayplans.push(plan);
   }
    addNewDayPlan(dayplan: String) {
       const plan: DayListItem = new DayListItem(dayplan , this.maxItemID + 1);
       this.maxItemID = this.maxItemID + 1;
       this.dayplans.push(plan);
   }

   getUserDayPlans() { // will be called by the day-plan-list module
       return this.dayplans;
   }

   deletePlan(planID: number) {
        for (let i = 0; i < this.dayplans.length; i++) {
            if (this.dayplans[i] != null && this.dayplans[i].id === planID) {
                this.dayplans.splice(i, 1);
            }
        }
   }

   getUsername() {
       return this.username;
   }

   getPassword() {
       return this.password;
   }


}
