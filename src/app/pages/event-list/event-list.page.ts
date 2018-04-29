import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventItem } from '../../models/event';
import { Observable } from 'rxjs/internal/Observable';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { EventManageModes } from './event-manage-modes';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.page.html',
    styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  $events: Observable<Array<EventItem>>;
  manageModes = EventManageModes;
  constructor(
    private eventService: EventService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.$events = this.eventService.getEvents();
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
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.eventService.deleteEvent(event);
          }
        },
        {
          text: 'Edit',
          handler: () => {
            this.manageEvent(this.manageModes.Edit, event);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
