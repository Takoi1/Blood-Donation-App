import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDisplayComponent } from './events-display.component';

describe('EventsDisplayComponent', () => {
  let component: EventsDisplayComponent;
  let fixture: ComponentFixture<EventsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsDisplayComponent]
    });
    fixture = TestBed.createComponent(EventsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
