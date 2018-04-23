import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailPage } from './event-detail.page';

describe('EventDetailPage', () => {
  let component: EventDetailPage;
  let fixture: ComponentFixture<EventDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
