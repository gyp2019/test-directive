import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingControlValuesComponent } from './managing-control-values.component';

describe('ManagingControlValuesComponent', () => {
  let component: ManagingControlValuesComponent;
  let fixture: ComponentFixture<ManagingControlValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingControlValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingControlValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
