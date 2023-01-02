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

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  modelData: any;
  listItems: ListItem[] = [];
  filteredListItems: ListItem[] = [];
  subscribe!: Subscription;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private listsService: ListsService
  ) {}

  ngOnInit() {
    this.getList();
  }

  getBeerType(type: string) {
    switch (type) {
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
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        modelName: data.establishment,
        modelBeer: data.beerName,
        modelType: data.type,
        modelNotes: data.notes,
        modelAddress: data.address,
        modelPrice: data.price,
        modelRating: data.rating,
        id: data.id,
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
    this.navCtrl.back();
  }

  getList(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subscribe = this.listsService.getListItems(id).subscribe((items) => {
      this.listItems = items;
    });
  }

  deleteList(id: number): void {
    //call to list service
    console.log('list removed', id);
  }
  ionViewWillLeave(): void {
    this.subscribe.unsubscribe();
  }
}
