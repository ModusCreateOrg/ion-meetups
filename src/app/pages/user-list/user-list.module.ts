import { NgModule } from '@angular/core';
import { UserListPage } from './user-list.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: UserListPage, outlet: 'users' }])
  ],
  declarations: [UserListPage],
  entryComponents: [UserListPage]
})
export class UserListModule { }
