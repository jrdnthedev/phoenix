/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal, ModalController, NavController } from '@ionic/angular';
import { ModalComponent } from 'src/app/features/my-list/components/modal/modal.component';
import { ListItem } from '../../interfaces/list-item';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})

export class ListDetailsComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  myList: ListItem[] = [
    {listName: 'dark favourites', name: 'bellwoods', id:1, listId:1 , beer: 'Billy Beer', type: 'dark', location: [{lat: 123,long: 123}], notes: 'fruit, chocolate, walnut', price: 12.99, rating: 4.5},
    {listName: 'light favourites', name: 'nightowl', id:2, listId:2 , beer: 'Tex Mex', type: 'light', location: [{lat: 123, long: 123}], notes: 'citrus, mint, fruit,citrus, mint, fruit,citrus, mint, fruit,citrus, mint, fruit,citrus, mint, fruit,citrus, mint, fruit',  price: 7.99, rating: 3.5},
    {listName: 'porter favourites', name: 'bushwicks', id:3, listId:4 , beer: 'mmmm mm plus', type: 'porter', location: [{lat: 123, long: 123}], notes: 'oat, chocolate, walnut', price: 10.99, rating: 4.3},
    {listName: 'IPA favourites', name: 'moss hallows', id:4, listId:5 , beer: 'Capn ale', type: 'IPA', location: [{lat: 123, long: 123}], notes: 'fruit, chocolate, walnut', price: 12.99, rating: 3.2},
    {listName: 'amber favourites', name: 'bushwicks', id:5, listId:3 , beer: 'mmmm mm', type: 'amber', location: [{lat: 123, long: 123}], notes: 'oat, chocolate, walnut', price: 8.99, rating: 4.1},
    {listName: 'light favourites', name: 'benchmark', id:6, listId:2 , beer: 'Long Bow', type: 'light', location: [{lat: 123, long: 123}], notes: 'fruit, chocolate, walnut', price: 4.99, rating: 2.5}
  ];

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  modelData: any;
  listItems: ListItem[] = [];

  constructor(private _modalController: ModalController, private _navCtrl: NavController, private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.getListItems(id);
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
        modelName: data.name,
        modelBeer: data.beer,
        modelType: data.type,
        modelNotes: data.notes,
        modelLocation: data.location,
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

  getListItems(id: number) {
    this.myList.forEach(item => {
      if(item.listId === id){
        this.listItems.push(item);
      }
    });
  }

  deleteList(id: number): void {
    console.log('list removed');
  }
}
