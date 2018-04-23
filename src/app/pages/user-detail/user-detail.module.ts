import { NgModule } from '@angular/core';
import { UserDetailPage } from './user-detail.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: UserDetailPage, outlet: 'users' }])
  ],
  declarations: [UserDetailPage],
  entryComponents: [UserDetailPage]
})
export class UserDetailModule { }
