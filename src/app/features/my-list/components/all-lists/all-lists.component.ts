/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserList } from '../../interfaces/user-lists/user-lists';
import { ListsService } from '../services/lists/lists.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss'],
})
export class AllListsComponent implements OnInit {
  myLists: UserList[] = [];
  subscribe!: Subscription;

  constructor(private listService: ListsService) { }

  ngOnInit() {
    this.getMyLists();
  }

  getMyLists(): void {
    this.subscribe = this.listService.getLists(1).subscribe(
      lists => this.myLists = lists
    );
  }

  ionViewWillLeave(): void {
    this.subscribe.unsubscribe();
  }
}
