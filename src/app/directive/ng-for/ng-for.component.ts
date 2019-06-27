import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  cities: string[] = ['Miami', 'Sao Paulo', 'New York'];
  people: Object[] = [
    { name: 'Anderson', age: 35, city: 'Sao Paulo' },
    { name: 'John', age: 28, city: 'Miami' },
    { name: 'Peter', age: 22, city: 'New York' },
  ];
  peopleByCity: Object[] = [
    {
      city: 'Miami',
      people: [
        { name: 'Anderson', age: 35 },
        { name: 'John', age: 28 },
      ],
    },
    {
      city: 'New York',
      people: [
        { name: 'Peter', age: 22 },
        { name: 'Angel', age: 22 },
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
