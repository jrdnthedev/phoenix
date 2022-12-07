import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDetailsComponent } from './components/list-details/list-details.component';

import { MyListPage } from './my-list.page';

const routes: Routes = [
  {
    path: '',
    component: MyListPage,
    pathMatch: 'full'
  },
  {
    path: 'list-details/:id',
    component: ListDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyListPageRoutingModule {}
