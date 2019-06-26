import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-validator-explicit',
  templateUrl: './form-validator-explicit.component.html',
  styleUrls: ['./form-validator-explicit.component.css']
})
export class FormValidatorExplicitComponent implements OnInit {
  signForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.signForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: [
        '',
        Validators.required,
        Validators.minLength(8),
      ],
    });
    // this.emailControl = this.signForm.controls['email'];
    // this.passwordContorl = this.signForm.controls['password'];
  }

  onSubmit(): void {
    console.log(this.signForm);
  }

}
