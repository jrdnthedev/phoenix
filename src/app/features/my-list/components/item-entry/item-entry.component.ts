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
  @Input() establishment: string;
  @Input() beer: string;
  @Input() type: string;
  @Input() notes: string;
  @Input() address: any;
  @Input() price: number;
  @Input() rating: number;
  @Input() selectedList: string;
  @Input() selectedBeerType: string;
  myLists: any;
  subscribe: Subscription [] = [];
  id: number;
  constructor(private listService: ListsService) { }

  ngOnInit() {
    this.getLists();
  }

  save(): void {
    const newEntry = {
      establishment: this.establishment,
      beerName: this.beer,
      type: this.selectedBeerType,
      notes: this.notes,
      address: this.address,
      price: this.price,
      rating: this.rating,
      listName: this.selectedList,
      id:1
    };
    console.log('information save!', newEntry);
    this.subscribe.push(
      this.listService.createListItem(newEntry).subscribe()
    );
  }
  getLists(){
    this.subscribe.push(this.listService.getLists(1).subscribe(
      list => this.myLists = list
    ));
  }

  ionViewWillLeave(): void {
    this.subscribe.forEach(item => {
      item.unsubscribe();
    });
  }
}
