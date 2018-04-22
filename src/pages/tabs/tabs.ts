import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = 'users-page';
  tab2Root = 'UsersPage';
  tab3Root = 'UsersPage';

  constructor() {}
}
