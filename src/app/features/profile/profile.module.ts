import { NgModule } from '@angular/core';

import { ProfilePage } from './profile.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilePageRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
