import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../../interfaces/list-item';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.scss'],
})
export class ItemEntryComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  @Input() beer: string;
  @Input() type: string;
  @Input() notes: string;
  @Input() location: any;
  @Input() price: number;
  @Input() rating: number;
  newEntry: any[] = [];

  constructor() { }

  ngOnInit() {}

  save(): void {
    this.newEntry.push({
      name: this.name,
      beer: this.beer,
      type: this.type,
      notes: this.notes,
      location: this.location,
      price: this.price,
      rating: this.rating
    });
    console.log('information save!', this.newEntry);
  }
}
