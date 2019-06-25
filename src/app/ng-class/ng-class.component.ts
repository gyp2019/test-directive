import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  public text1: string = `
  <div [ngClass]="{'border': false}">This is never bordered</div>
  <div [ngClass]="{'border': true}">This is always bordered</div>
  `;

  constructor() { }

  ngOnInit() {
  }

}
