/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
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
    {name: 'bellwoods', id:1, listId:1 , beer: 'Billy Beer', type: 'dark', location: [{lat: 123,long: 123}], notes: 'fruit, chocolate, walnut', price: 12.99, rating: 4.5},
    {name: 'nightowl', id:2, listId:2 , beer: 'Tex Mex', type: 'light', location: [{lat: 123, long: 123}], notes: 'citrus, mint, fruit',  price: 7.99, rating: 3.5},
    {name: 'bushwicks', id:3, listId:4 , beer: 'mmmm mm plus', type: 'porter', location: [{lat: 123, long: 123}], notes: 'oat, chocolate, walnut', price: 10.99, rating: 4.3},
    {name: 'moss hallows', id:4, listId:5 , beer: 'Capn ale', type: 'IPA', location: [{lat: 123, long: 123}], notes: 'fruit, chocolate, walnut', price: 12.99, rating: 3.2},
    {name: 'bushwicks', id:5, listId:3 , beer: 'mmmm mm', type: 'amber', location: [{lat: 123, long: 123}], notes: 'oat, chocolate, walnut', price: 8.99, rating: 4.1},
    {name: 'benchmark', id:6, listId:2 , beer: 'Long Bow', type: 'light', location: [{lat: 123, long: 123}], notes: 'fruit, chocolate, walnut', price: 4.99, rating: 2.5}
  ];
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  modelData: any;

  constructor(private _modalController: ModalController) { }

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
}
