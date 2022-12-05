import { NgModule } from '@angular/core';

import { MyListPage } from './my-list.page';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyListPageRoutingModule } from './my-list-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MyListPageRoutingModule
  ],
  declarations: [
    MyListPage,
    ListDetailsComponent
  ]
})
export class MyListPageModule {}
