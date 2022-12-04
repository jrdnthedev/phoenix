/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})
export class ListDetailsComponent implements OnInit {
  myList: any = [
    {name: 'bellwoods', beer: 'Billy Beer', type: 'dark', location: [{lat: 123,long: 123}], notes: 'fruit, chocolate, walnut', price: 12.99, rating: 4.5},
    {name: 'nightowl', beer: 'Tex Mex', type: 'light', location: [{lat: 123, long: 123}], notes: 'citrus, mint, fruit',  price: 7.99, rating: 3.5},
    {name: 'bushwicks', beer: 'mmmm mm plus', type: 'porter', location: [{lat: 123, long: 123}], notes: 'oat, chocolate, walnut', price: 10.99, rating: 4.3},
    {name: 'moss hallows', beer: 'Capn ale', type: 'IPA', location: [{lat: 123, long: 123}], notes: 'fruit, chocolate, walnut', price: 12.99, rating: 3.2},
    {name: 'bushwicks', beer: 'mmmm mm', type: 'amber', location: [{lat: 123, long: 123}], notes: 'oat, chocolate, walnut', price: 8.99, rating: 4.1},
    {name: 'benchmark', beer: 'Long Bow', type: 'ale', location: [{lat: 123, long: 123}], notes: 'fruit, chocolate, walnut', price: 4.99, rating: 2.5}
  ];

  constructor() { }

  ngOnInit() {
  }

  getBeerType(type: string) {
    switch(type) {
      case 'dark':
        return 'dark';
      case 'light':
        return 'light';
      case 'porter':
        return 'amber';
      case 'amber':
        return 'amber';
      case 'IPA':
          return 'light';
      case 'ale':
          return 'light';
    }
  }

}
