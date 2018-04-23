import { Injectable } from '@angular/core';
import { EventItem } from '../models/event';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  $eventsSource = new BehaviorSubject<Array<EventItem>>([]);
  $events: Observable<Array<EventItem>>;
  constructor() {
    this.$events = this.$eventsSource.asObservable();
    this.loadEvents();
  }

  loadEvents() {

  }

  getEvents(): Observable<Array<EventItem>> {
    const eventsList: Array<EventItem> = [{
      name: 'Event1',
      attendees: []
    }];
    return of(eventsList);
  }

  addEvent() {
  }

  deleteEvent() {

  }

  updateEvent() {
  }

}
