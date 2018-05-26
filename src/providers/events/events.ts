import { Injectable } from '@angular/core';
import { EventItem } from '../../models/event';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { first, map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class EventsProvider {
  $eventsSource = new BehaviorSubject<Array<EventItem>>([]);
  $events: Observable<Array<EventItem>>;
  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.$events = this.$eventsSource.asObservable();
    this.loadEvents();
  }

  loadEvents() {
    const events = JSON.parse(localStorage.getItem('ion-meetup-events') || '[]');
    this.$eventsSource.next(events.map(this.processEvent.bind(this)));
  }

  getEvents(): Observable<Array<EventItem>> {
    return this.$events;
  }

  processEvent(event: EventItem): EventItem {
    event.imageSafe = this.sanitizer.bypassSecurityTrustResourceUrl(event.image);
    return event;
  }

  getEventById(eventId: number): Observable<EventItem> {
    return this.getEvents()
      .pipe(
        first(),
        map((events: Array<EventItem>) => events.find(event => (event.id === eventId)))
      );
  }

  addEvent(event: EventItem) {
    this.$events
      .pipe(
        first()
      )
      .subscribe(events => {
        event.id = Date.now();
        event.image = `https://picsum.photos/200/150/?random&t=${event.id}`;
        const combinedEvents = [...events, event];
        this.saveEvents(combinedEvents);
        this.$eventsSource.next(combinedEvents.map(this.processEvent.bind(this)));
      });
  }

  deleteEvent(eventToDelete: EventItem) {
    this.$events
      .pipe(
        first()
      )
      .subscribe(events => {
        const eventsArr = events.filter(event => (event.id !== eventToDelete.id));
        this.saveEvents(eventsArr);
        this.$eventsSource.next(eventsArr.map(this.processEvent.bind(this)));
      });
  }

  updateEvent(event: EventItem) {
    this.$events
      .pipe(
        first()
      )
      .subscribe(events => {
        const updatedEvents = events.map(cachedEvent => {
          if (cachedEvent.name === event.name) {
            return event;
          } else {
            return cachedEvent;
          }
        });
        this.saveEvents(updatedEvents);
        this.$eventsSource.next(updatedEvents.map(this.processEvent.bind(this)));
      });
  }

  saveEvents(events: Array<EventItem> = []) {
    events = events.map(event => {
      delete event.imageSafe;
      return event;
    });
    localStorage.setItem('ion-meetup-events', JSON.stringify(events));
  }
}
