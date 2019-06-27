import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-generating-form-controls-with-formbuilder',
  templateUrl: './generating-form-controls-with-formbuilder.component.html',
  styleUrls: ['./generating-form-controls-with-formbuilder.component.css']
})
export class GeneratingFormControlsWithFormbuilderComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  })

  constructor(private fb: FormBuilder) { }

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
