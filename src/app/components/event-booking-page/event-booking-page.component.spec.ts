import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingPageComponent } from './event-booking-page.component';

describe('EventBookingPageComponent', () => {
  let component: EventBookingPageComponent;
  let fixture: ComponentFixture<EventBookingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBookingPageComponent]
    });
    fixture = TestBed.createComponent(EventBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
