import { NgModule } from '@angular/core';

import { MyListPage } from './my-list.page';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { ItemEntryComponent } from './components/item-entry/item-entry.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyListPageRoutingModule } from './my-list-routing.module';
import { AllListsComponent } from './components/all-lists/all-lists.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    SharedModule,
    MyListPageRoutingModule
  ],
  declarations: [
    MyListPage,
    ListDetailsComponent,
    ItemEntryComponent,
    AllListsComponent,
    ModalComponent
  ]
})
export class MyListPageModule {}
