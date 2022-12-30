import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListsService } from '../services/lists/lists.service';

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
  @Input() selectedList: string;
  @Input() selectedBeerType: string;
  myLists: any;
  subscribe!: Subscription;
  id: number;
  constructor(private listService: ListsService) { }

  ngOnInit() {
    this.getLists();
  }

  save(): void {
    const newEntry = {
      name: this.name,
      beer: this.beer,
      type: this.selectedBeerType,
      notes: this.notes,
      location: this.location,
      price: this.price,
      rating: this.rating,
      id: this.selectedList
    };
    console.log('information save!', newEntry);
  }
  getLists(){
    this.subscribe = this.listService.getLists(1).subscribe(
      list => this.myLists = list
    );
  }

  ionViewWillLeave(): void {
    this.subscribe.unsubscribe();
  }
}
