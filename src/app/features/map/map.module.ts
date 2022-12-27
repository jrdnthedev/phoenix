import { NgModule } from '@angular/core';

import { MapPage } from './map.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MapPageRoutingModule } from './map-routing.module';
import { SheetModalComponent } from './components/modal/sheet-modal/sheet-modal.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    MapPageRoutingModule
  ],
  declarations: [
    MapPage,
    MapComponent,
    SheetModalComponent
  ]
})
export class MapPageModule {}
