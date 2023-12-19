import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorEventComponent } from './donor-event.component';

describe('DonorEventComponent', () => {
  let component: DonorEventComponent;
  let fixture: ComponentFixture<DonorEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorEventComponent]
    });
    fixture = TestBed.createComponent(DonorEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
