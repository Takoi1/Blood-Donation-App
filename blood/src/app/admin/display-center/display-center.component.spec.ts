import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCenterComponent } from './display-center.component';

describe('DisplayCenterComponent', () => {
  let component: DisplayCenterComponent;
  let fixture: ComponentFixture<DisplayCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCenterComponent]
    });
    fixture = TestBed.createComponent(DisplayCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
