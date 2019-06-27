import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingNestedFormGroupsComponent } from './creating-nested-form-groups.component';

describe('CreatingNestedFormGroupsComponent', () => {
  let component: CreatingNestedFormGroupsComponent;
  let fixture: ComponentFixture<CreatingNestedFormGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingNestedFormGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingNestedFormGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
