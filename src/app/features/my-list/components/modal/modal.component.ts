/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-underscore-dangle */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ListsService } from '../services/lists/lists.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modelTitle: string;
  @Input() modelName: string;
  @Input() modelBeer: string;
  @Input() modelType: string;
  @Input() modelNotes: string;
  @Input() modelLocation: any;
  @Input() modelPrice: number;
  @Input() modelRating: number;
  @Input() modelAddress: string;
  @Input() id: number;
  subscribe!: Subscription;

  constructor(private _modalController: ModalController, private listService: ListsService) { }

  ngOnInit() {}

  async saveModel() {
    const close: string = 'Modal Removed';
    const item = {
      id: this.id,
      establishment: this.modelName,
      beerName: this.modelBeer,
      type: this.modelType,
      // lat: '',
      // lng: '',
      address: this.modelAddress
    };
    this.subscribe = this.listService.updateList(item).subscribe();
  }

  async exit() {
    await this._modalController.dismiss(close);
  }
  ionViewWillLeave(): void {
    this.subscribe.unsubscribe();
  }
}
