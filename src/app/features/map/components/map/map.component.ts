/* eslint-disable no-underscore-dangle */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import { ListsService } from 'src/app/features/my-list/components/services/lists/lists.service';
import { Subscription } from 'rxjs';

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

  constructor(private _listService: ListsService) { }

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

    this.addMarkers();
  }

  async addMarkers() {
    const markers: Marker[] = [];

      this.listItem.forEach(element => {
        markers.push({
          coordinate: {
            lat:element.lat,
            lng:element.lon
          },
          title: element.beerName,
          snippet:element.establishment
        });
      });
      await this.newMap.addMarkers(markers);
  }

  getList(): void {
    this.subscribe = this._listService.getAllLists().subscribe(
      list => this.listItem = list
    );
  }
}
