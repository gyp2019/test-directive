import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  myForm: FormGroup;
  myForm2: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      nickname: ['abc123'],
    });
    this.myForm2 = this.formBuilder.group({
      email: ['bob@gmail.com'],
      password: ['abc123'],
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log(value);
  }

}
