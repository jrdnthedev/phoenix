/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss'],
})
export class AllListsComponent implements OnInit {
  myLists: any = [
    {name: 'dark favourites', type: 'dark', total: 1, id:1},
    {name: 'light favourites', type: 'light', total: 2, id:2},
    {name: 'amber favourites', type: 'amber', total: 1, id:3},
    {name: 'porter favourites', type: 'porter', total: 1, id:4},
    {name: 'IPA favourites', type: 'porter', total: 1, id:5},
  ];

  constructor() { }

  ngOnInit() {}

}
