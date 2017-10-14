import { DayPlanService } from './../day-plan.service';
import { DayListItem } from './day-list-item/day-list-item.model';

export class DayPlanList {

  private todo: DayListItem[];

  constructor(private dayPlanService: DayPlanService) {

   }

   addItem(newItem: DayListItem) {
       this.dayPlanService.addToCurrentDayList(newItem);
   }

   addDayPlanItems(items: DayListItem[]) {
        this.todo = items;
   }

   getTodo() {
        return this.todo;
   }
}
