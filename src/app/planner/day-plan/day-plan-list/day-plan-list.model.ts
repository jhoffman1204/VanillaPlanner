import { DayListItem } from './day-list-item/day-list-item.model';

export class DayPlanList {

  private todo: DayListItem[];

  constructor() {

   }

   addItem(newItem: DayListItem) {

   }

   addDayPlanItems(items: DayListItem[]) {
        this.todo = items;
   }

   getTodo() {
        return this.todo;
   }
}
