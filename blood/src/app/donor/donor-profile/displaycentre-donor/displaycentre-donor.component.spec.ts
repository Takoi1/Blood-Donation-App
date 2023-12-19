import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycentreDonorComponent } from './displaycentre-donor.component';

describe('DisplaycentreDonorComponent', () => {
  let component: DisplaycentreDonorComponent;
  let fixture: ComponentFixture<DisplaycentreDonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaycentreDonorComponent]
    });
    fixture = TestBed.createComponent(DisplaycentreDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
