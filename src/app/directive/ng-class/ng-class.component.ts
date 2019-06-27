import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  public example1: string = `
  <div [ngClass]="{'border': false}">This is never bordered</div>
  <div [ngClass]="{'border': true}">This is always bordered</div>
  `;
  public isBordered: boolean = false;
  public example2: string = `
  <div class="bg-light my-4 p-3">
    <div [ngClass]="{'border': isBordered}">Border {{ isBordered ? "ON" : "OFF" }}</div>
  </div>
  <div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="checkIsBordered" [(ngModel)]="isBordered">
      <label class="form-check-label" for="checkIsBordered">isBordered</label>
    </div>
  </div>
  `;
  public classesObj: Object = { border: true };
  public example3: string = `
  <div [ngClass]="classesObj">border {{ classesObj.border ? "ON" : "OFF" }}</div>
  `;
  public classList: string[] = ['bg-primary', 'rounded'];
  public example4: string = `
  <pre>
    <div [ngClass]="classList">
      This is{{ classList.indexOf('bg-primary') > -1 ? "" : " NOT" }} bg-primary
      This is{{ classList.indexOf('rounded') > -1 ? "" : " NOT" }} rounded
      This is{{ classList.indexOf('text-white') > -1 ? "" : " NOT" }} text-white
    </div>
  </pre>
  `;

  constructor() { }

  ngOnInit() {
  }

}
