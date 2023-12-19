import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDonComponent } from './display-don.component';

describe('DisplayDonComponent', () => {
  let component: DisplayDonComponent;
  let fixture: ComponentFixture<DisplayDonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDonComponent]
    });
    fixture = TestBed.createComponent(DisplayDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
