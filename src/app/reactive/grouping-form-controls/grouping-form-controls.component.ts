import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grouping-form-controls',
  templateUrl: './grouping-form-controls.component.html',
  styleUrls: ['./grouping-form-controls.component.css']
})
export class GroupingFormControlsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

}
