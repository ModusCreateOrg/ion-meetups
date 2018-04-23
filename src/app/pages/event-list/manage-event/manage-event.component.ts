import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventManageModes } from '../event-manage-modes';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss']
})
export class ManageEventComponent implements OnInit {
  manageModes = EventManageModes;
  activeMode: EventManageModes;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
