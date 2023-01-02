/* eslint-disable no-underscore-dangle */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import { ListsService } from 'src/app/features/my-list/components/services/lists/lists.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { SheetModalComponent } from '../modal/sheet-modal/sheet-modal.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  markers: GoogleMap;
  listItem: any;
  subscribe!: Subscription;
  modelData: any;

  constructor(private listService: ListsService, private _modalCtrl: ModalController) { }

  ngOnInit() {
    this.getList();
    this.getMap();
  }

  async getMap() {
    const mapRef = document.getElementById('map');
    const coordinates = await Geolocation.getCurrentPosition();
    this.newMap = await GoogleMap.create({
      id: 'map',
      element: mapRef,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        zoom: 15,
      },
    });
    const myCoords = {
      coordinate: {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      },
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-pushpin.png'
    };
    await this.addMarkers();
    await this.newMap.addMarker(myCoords);
  }

  async addMarkers() {
    const markers: Marker[] = [];

      this.listItem.forEach(element => {
        markers.push({
          coordinate: {
            lat: element.lat,
            lng: element.lng
          },
          title: element.beerName,
          snippet: element.address
        });
      });
      await this.newMap.addMarkers(markers);

      this.newMap.setOnMarkerClickListener(async (marker) => {
        console.log(marker);
        this.openModal(marker);
      });
  }

  async openModal(data: any) {
    const modal = await this._modalCtrl.create({
      component: SheetModalComponent,
      initialBreakpoint: 0.25,
      breakpoints: [0, 0.25, 0.5, 0.75],
      componentProps: {
        // modelName: data.snippet,
        modelBeer: data.title
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

  getList(): void {
    this.subscribe = this.listService.getAllListItems().subscribe(
      list => this.listItem = list
    );
  }
}
