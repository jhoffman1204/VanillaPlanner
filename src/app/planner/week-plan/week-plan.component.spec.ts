import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPlanComponent } from './week-plan.component';

describe('WeekPlanComponent', () => {
  let component: WeekPlanComponent;
  let fixture: ComponentFixture<WeekPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
