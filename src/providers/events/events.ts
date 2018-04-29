import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const EVENTS_KEY = 'ion-events';

@Injectable()
export class EventsProvider {
  constructor(public http: HttpClient) {
    console.log('Hello EventsProvider Provider');
    this.loadEvents();
  }

  _events = [];
  get events() {
    return this._events;
  }

  set events(evts) {
    this._events = evts;
  }

  loadEvents() {
    try {
      const eventData = JSON.parse(localStorage.getItem(EVENTS_KEY));
      this.events = eventData || [];
    } catch (err) {
      this.events = [];
    }
  }

  saveEvents() {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(this.events));
  }

  add(event) {
    this._events.push(event);
    this.saveEvents();
  }

  update(event) {
    const index = this.events.findIndex(ev => ev.id === event.id);
    if (index < 0) return false;

    this._events.splice(index, 1, event);
    this.saveEvents();
  }

  remove({ id }) {
    const index = this.events.findIndex(ev => ev.id === id);
    if (index < 0) return false;

    this._events.splice(index, 1);
    this.saveEvents();
  }
}
