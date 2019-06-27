import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  public a: number = 10;
  public b: number = 5;
  public str: string = 'yes';
  public text: string = `
  <div *ngIf="false">A</div>
  <div *ngIf="a > b">B</div>
  <div *ngIf="str == 'yes'">C</div>
  <div *ngIf="myFunc()">D</div>
  `;

  constructor() { }

  ngOnInit() {
  }

  myFunc(): boolean {
    return true;
  }

}
