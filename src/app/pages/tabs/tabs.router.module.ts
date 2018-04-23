import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'event-list',
        outlet: 'events',
        loadChildren: '../event-list/event-list.module#EventListModule'
      },
      {
        path: 'event-detail',
        outlet: 'events',
        loadChildren: '../event-detail/event-detail.module#EventDetailModule'
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'user-list',
        outlet: 'users',
        loadChildren: '../user-list/user-list.module#UserListModule'
      },
      {
        path: 'user-detail',
        outlet: 'users',
        loadChildren: '../user-detail/user-detail.module#UserDetailModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(events:event-list)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
