import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingFormControlsComponent } from './grouping-form-controls.component';

describe('GroupingFormControlsComponent', () => {
  let component: GroupingFormControlsComponent;
  let fixture: ComponentFixture<GroupingFormControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupingFormControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
