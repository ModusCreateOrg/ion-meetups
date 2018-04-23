import { EventDetailModule } from './event-detail.module';

describe('EventDetailModule', () => {
  let eventDetailModule: EventDetailModule;

  beforeEach(() => {
    eventDetailModule = new EventDetailModule();
  });

  it('should create an instance', () => {
    expect(eventDetailModule).toBeTruthy();
  });
});
