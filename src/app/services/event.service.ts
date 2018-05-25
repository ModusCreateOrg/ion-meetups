import { Injectable } from '@angular/core';
import { EventItem } from '../models/event';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { first, map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  $eventsSource = new BehaviorSubject<Array<EventItem>>([]);
  $events: Observable<Array<EventItem>>;
  $activeEventSource = new BehaviorSubject<EventItem>(null);
  $activeEvent: Observable<EventItem>;
  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.$events = this.$eventsSource.asObservable();
    this.$activeEvent = this.$activeEventSource.asObservable();
    this.loadEvents();
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Loads the events initially from the storage
   */
  loadEvents() {
    const events = JSON.parse(localStorage.getItem('ion-meetup-events') || '[]');
    this.$eventsSource.next(events.map(this.processEvent.bind(this)));
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Returns the stream of events
   * @returns {Observable} - stream of events
   */
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

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Adds the event to the events list.
   * @param event - event to be added / created
   */
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

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Updates the event based on email comparison.
   * @param event - event to update
   */
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

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Saves the events list to storage
   * @param events - events to be saved
   */
  saveEvents(events: Array<EventItem> = []) {
    events = events.map(event => {
      delete event.imageSafe;
      return event;
    });
    localStorage.setItem('ion-meetup-events', JSON.stringify(events));
  }

}
