import { Component, OnInit } from '@angular/core';

// interface LabeledValue {
//   label: string;
// }

interface SquareConfig {
  color?: string;
  width?: number;
}

interface SquareConfigExcess {
  color?: string;
  width?: number;
  [propName: string]: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let myObj = { size: 10, label: "size 10 object" };
    // this.printLabel(myObj);

    // let mySquare = this.createSquare({ color: "black" });
    // let mySquare = this.createSquare({ color: "black", width: 19 });
    // let mySquare = this.createSquare({ colour: "red", width: 100 }); // error
    // let mySquare = this.createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
    // let mySquare = this.createSquareExcess({ colour: "red", width: 100 });

    let squareOptions = { colour: "red", width: 100 };
    // let squareOptions = { colour: "red" }; // error
    let mySquare = this.createSquare(squareOptions);
    console.log(mySquare);
  }

  // printLabel(labeledObj: { label: string }) {
  //   console.log(labeledObj.label);
  // }

  // printLabel(labeledObj: LabeledValue) {
  //   console.log(labeledObj.label);
  // }

  createSquare(config: SquareConfig): {color: string} {
    let newSqure = { color: "white", area: 100 };
    if (config.color) {
      newSqure.color = config.color;
    }
    if (config.width) {
      newSqure.area = config.width * config.width;
    }

    return newSqure;
  }

  createSquareExcess(config: SquareConfigExcess): {color: string} {
    let newSqure = { color: "white", area: 100 };
    if (config.color) {
      newSqure.color = config.color;
    }
    if (config.width) {
      newSqure.area = config.width * config.width;
    }

    return newSqure;
  }

}
