import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventItem } from '../../models/event';
import { Observable } from 'rxjs/internal/Observable';
import { ModalController, ActionSheetController, Platform } from '@ionic/angular';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { EventManageModes } from './event-manage-modes';
import { Router } from '@angular/router';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.page.html',
    styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  $events: Observable<Array<EventItem>>;
  manageModes = EventManageModes;
  isAndroidDevice: boolean;
  constructor(
    private eventService: EventService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.$events = this.eventService.getEvents();
    this.isAndroidDevice = this.platform.is('android');
  }

  goToEventDetail(event: EventItem) {
    console.log(event);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggers upon clicking on an event or on the plus sign at the top
   * @param mode - sets the mode when the manage event modal is opened (Create/Edit)
   * @param event - null if the mode is create, or the event which is to be edited/updated
   */
  async manageEvent(activeMode, event?: EventItem) {
    this.eventService.$activeEventSource.next(event);
    const modal = await this.modalCtrl.create({
      component: ManageEventComponent,
      componentProps: {
        activeMode,
        event
      }
    });
    modal.present();
    const data = await modal.onDidDismiss();
    console.log(data);
  }

  async showEventActions(event: EventItem) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Manage your event',
      buttons: [
        {
          text: 'View',
          icon: this.isAndroidDevice ? 'eye' : '',
          handler: () => {
            this.router.navigateByUrl(`tabs/(events:event-detail/${event.id}`);
          }
        },
        {
          text: 'Edit',
          icon: this.isAndroidDevice ? 'create' : '',
          handler: () => {
            this.manageEvent(this.manageModes.Edit, event);
          }
        },
        {
          text: 'Delete',
          icon: this.isAndroidDevice ? 'trash' : '',
          role: 'destructive',
          handler: () => {
            this.eventService.deleteEvent(event);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: this.isAndroidDevice ? 'close' : '',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
