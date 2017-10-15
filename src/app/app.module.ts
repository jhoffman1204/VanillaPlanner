import { DayPlanService } from './planner/day-plan/day-plan.service';
import { UserService } from './users/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModeSelectorComponent } from './mode-selector/mode-selector.component';
import { WeekPlanComponent } from './planner/week-plan/week-plan.component';
import { DayPlanComponent } from './planner/day-plan/day-plan.component';
import { PlannerComponent } from './planner/planner.component';
import { DayPlanListComponent } from './planner/day-plan/day-plan-list/day-plan-list.component';
import { DayListItemComponent } from './planner/day-plan/day-plan-list/day-list-item/day-list-item.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HttpModule } from '@angular/http';
import { DataComponent } from './data/data.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModeSelectorComponent,
    WeekPlanComponent,
    DayPlanComponent,
    PlannerComponent,
    DayPlanListComponent,
    DayListItemComponent,
    UsersComponent,
    UserComponent,
    DataComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, DayPlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
