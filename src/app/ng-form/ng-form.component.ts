import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {
  example1: string = `
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
    <div class="form-group">
      <label for="nicknameInput">Nickname</label>
      <input type="text" class="form-control" id="nicknameInput" placeholder="Enter nickname" name="nickname" ngModel>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log(form);
  }

}
