import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  public myVar: string = 'B';
  public text: string = `
  <span [ngSwitch]="myVar">
    <p *ngSwitchCase="'A'">
      This is A
    </p>
    <p *ngSwitchCase="'B'">
      This is B
    </p>
    <p *ngSwitchCase="'C'">
      This is C
    </p>
    <p *ngSwitchDefault>
      This is something else
    </p>
  </span>
  `;

  constructor() { }

  ngOnInit() {
  }

}
