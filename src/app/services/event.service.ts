import { Injectable } from '@angular/core';
import { EventItem } from '../models/event';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  $eventsSource = new BehaviorSubject<Array<EventItem>>([]);
  $events: Observable<Array<EventItem>>;
  $activeEventSource = new BehaviorSubject<EventItem>(null);
  $activeEvent: Observable<EventItem>;
  constructor() {
    this.$events = this.$eventsSource.asObservable();
    this.$activeEvent = this.$activeEventSource.asObservable();
    this.loadEvents();
  }

  /**
   * @author Ahsan Ayaz
   * @desc Loads the events initially from the storage
   */
  loadEvents() {
    const events = JSON.parse(localStorage.getItem('ion-meetup-events') || '[]');
    this.$eventsSource.next(events);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Returns the stream of events
   * @returns {Observable} - stream of events
   */
  getEvents(): Observable<Array<EventItem>> {
    return this.$events;
  }

  /**
   * @author Ahsan Ayaz
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
        const combinedEvents = [...events, event];
        this.saveEvents(combinedEvents);
        this.$eventsSource.next(combinedEvents);
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
        this.$eventsSource.next(eventsArr);
      });
  }

  /**
   * @author Ahsan Ayaz
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
        this.$eventsSource.next(updatedEvents);
      });
  }

  /**
   * @author Ahsan Ayaz
   * @desc Saves the events list to storage
   * @param events - events to be saved
   */
  saveEvents(events = []) {
    localStorage.setItem('ion-meetup-events', JSON.stringify(events));
  }

}
