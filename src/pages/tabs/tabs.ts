import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = 'events-page';
  tab2Root: any = 'users-page';

  constructor() {}
}
