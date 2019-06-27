import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-creating-nested-form-groups',
  templateUrl: './creating-nested-form-groups.component.html',
  styleUrls: ['./creating-nested-form-groups.component.css']
})
export class CreatingNestedFormGroupsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

}
