import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  public text1: string = `<div [style.background-color]="'yellow'">background</div>`;
  public text2: string = `<div [ngStyle]="{color: 'white', 'background-color': 'blue'}">background</div>`;
  public text3: string = `
  <div>
    <span [ngStyle]="{color: color}" [style.font-size.px]="fontSize">red text</span>
  </div>
  <div>
    <input type="text" name="color" value="{{color}}" #colorinput>
  </div>
  <div>
    <input type="number" name="fontSize" value="{{fontSize}}" #fontinput>
  </div>
  <button (click)="apply(colorinput.value, fontinput.value)">Apply</button>
  `;

  public color: string = 'orange';
  public fontSize: number = 20;
  constructor() { }

  ngOnInit() {
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }

}
