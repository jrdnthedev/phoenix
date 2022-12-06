/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-underscore-dangle */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor(private _modalController: ModalController) { }

  ngOnInit() {}

  async closeModel() {
    const close: string = 'Modal Removed';
    await this._modalController.dismiss(close);
  }
}
