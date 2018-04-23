import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListPage } from './event-list.page';

describe('EventListPage', () => {
  let component: EventListPage;
  let fixture: ComponentFixture<EventListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
