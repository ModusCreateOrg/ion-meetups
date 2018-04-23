import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    TabsPageRoutingModule,
    AboutPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
