import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCenterComponent } from './update-center.component';

describe('UpdateCenterComponent', () => {
  let component: UpdateCenterComponent;
  let fixture: ComponentFixture<UpdateCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCenterComponent]
    });
    fixture = TestBed.createComponent(UpdateCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});