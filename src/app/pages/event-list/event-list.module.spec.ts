import { EventListModule } from './event-list.module';

describe('EventListModule', () => {
  let eventListModule: EventListModule;

  beforeEach(() => {
    eventListModule = new EventListModule();
  });

  it('should create an instance', () => {
    expect(eventListModule).toBeTruthy();
  });
});
