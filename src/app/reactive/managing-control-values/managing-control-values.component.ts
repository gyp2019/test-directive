import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-managing-control-values',
  templateUrl: './managing-control-values.component.html',
  styleUrls: ['./managing-control-values.component.css']
})
export class ManagingControlValuesComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
