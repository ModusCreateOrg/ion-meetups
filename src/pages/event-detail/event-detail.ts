import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EventItem } from '../../models/event';
import { EventsProvider } from '../../providers/events/events';

@IonicPage({
  name: 'event-detail-page'
})
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  $eventItem: Observable<EventItem>;
  constructor(
    private eventService: EventsProvider,
    private navParams: NavParams
  ) { }

  ionViewDidLoad() {
    const eventId = +this.navParams.get('eventId');
    this.$eventItem = this.eventService.getEventById(eventId);
  }
}
