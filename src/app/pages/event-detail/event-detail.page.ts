import { Component, OnInit } from '@angular/core';
import { EventItem } from '../../models/event';
import { Observable } from 'rxjs/internal/Observable';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.page.html',
    styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  $eventItem: Observable<EventItem>;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        first()
      )
      .subscribe(params => {
        const eventId = +params.eventId;
        this.$eventItem = this.eventService.getEventById(eventId);
      });
  }

}
