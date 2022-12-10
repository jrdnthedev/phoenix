/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ModalComponent } from 'src/app/features/my-list/components/modal/modal.component';
import { ListItem } from '../../interfaces/list-items/list-item';
import { ListsService } from '../services/lists/lists.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})

export class ListDetailsComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  myList: ListItem[] = [];

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  modelData: any;
  listItems: ListItem[] = [];
  filteredListItems: ListItem[] = [];
  subscribe!: Subscription;

  constructor(private _modalController: ModalController, private _navCtrl: NavController, private _route: ActivatedRoute, private _listsService: ListsService) { }

  ngOnInit() {
    this.getAllLists();
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

  async openModal(data: ListItem) {
    const modal = await this._modalController.create({
      component: ModalComponent,
      componentProps: {
        modelName: data.establishment,
        modelBeer: data.beerName,
        modelType: data.type,
        modelNotes: data.notes,
        // modelLocation: data.location,
        modelPrice: data.price,
        modelRating: data.rating
      },
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }

  back(): void {
    this._navCtrl.back();
  }

  getAllLists(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.subscribe = this._listsService.getAllLists().subscribe(
      items => {
        this.listItems = items;
        this.getListItems(id, this.listItems);
      }
    );
  }

  getListItems(id: number, listItem: ListItem[]) {
    listItem.forEach(item => {
      if(item.listId === id){
        this.filteredListItems.push(item);
      }
    });
  }

  deleteList(id: number): void {
    //call to list service
    console.log('list removed', id);
  }
}
