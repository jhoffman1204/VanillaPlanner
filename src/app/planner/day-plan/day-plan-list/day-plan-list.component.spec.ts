import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPlanListComponent } from './day-plan-list.component';

describe('DayPlanListComponent', () => {
  let component: DayPlanListComponent;
  let fixture: ComponentFixture<DayPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
