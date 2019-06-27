import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-controls-using-form-arrays',
  templateUrl: './dynamic-controls-using-form-arrays.component.html',
  styleUrls: ['./dynamic-controls-using-form-arrays.component.css']
})
export class DynamicControlsUsingFormArraysComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control(''),
    ]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(): void {
    this.aliases.push(this.fb.control(''));
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
