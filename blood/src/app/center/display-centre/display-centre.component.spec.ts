import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCentreComponent } from './display-centre.component';

describe('DisplayCentreComponent', () => {
  let component: DisplayCentreComponent;
  let fixture: ComponentFixture<DisplayCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCentreComponent]
    });
    fixture = TestBed.createComponent(DisplayCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
