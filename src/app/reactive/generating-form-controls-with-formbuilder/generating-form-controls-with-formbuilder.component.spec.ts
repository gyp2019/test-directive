import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingFormControlsWithFormbuilderComponent } from './generating-form-controls-with-formbuilder.component';

describe('GeneratingFormControlsWithFormbuilderComponent', () => {
  let component: GeneratingFormControlsWithFormbuilderComponent;
  let fixture: ComponentFixture<GeneratingFormControlsWithFormbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratingFormControlsWithFormbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratingFormControlsWithFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
