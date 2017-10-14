import { UserService } from './../../users/users.service';
import { User } from './../../users/user/user.model';
import { DayListItem } from './day-plan-list/day-list-item/day-list-item.model';
import { DayPlan } from './day-plan.model';
import { DayPlanList } from './day-plan-list/day-plan-list.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class DayPlanService {

    planSelected = new EventEmitter<DayListItem>();

    private dayplans: DayListItem[] = [];

    private currentDayPlanList: DayPlanList;
    private currentDayPlan: DayPlan;

    constructor(private userService: UserService) {}

    saveToCurrentUser() {
         this.userService.getCurrentUser();
    }

    setCurrentDayPlan(currentDayPlan: DayPlanList) {
        this.currentDayPlanList = currentDayPlan;
    }

    addDayPlanToCurrentUser() {
        this.userService.addPlanToCurrentUser();
    }

    getDayPlans() {
        return this.dayplans;
    }

    getCurrentDayPlanlist() {
        return this.currentDayPlanList;
    }

    addToCurrentDayList(listItem: DayListItem) {
        // this.currentDayPlanList.appendItem(listItem);
    }

    addPlan(plan: String) {

        this.dayplans.push(
            new DayListItem(plan)
        );
        this.addDayPlanToCurrentUser();

    }

}
