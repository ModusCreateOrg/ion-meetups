import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'tabs-page'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = 'events-page';
  tab2Root: any = 'users-page';
  tab3Root: any = 'about-page';

  constructor() {}
}
