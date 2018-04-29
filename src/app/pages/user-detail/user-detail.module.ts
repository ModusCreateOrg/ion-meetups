import { NgModule } from '@angular/core';
import { UserDetailPage } from './user-detail.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserDetailPage, outlet: 'users' }])
  ],
  declarations: [UserDetailPage],
  entryComponents: [UserDetailPage]
})
export class UserDetailModule { }
