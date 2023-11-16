import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorprofileComponent } from './donorprofile.component';

describe('DonorprofileComponent', () => {
  let component: DonorprofileComponent;
  let fixture: ComponentFixture<DonorprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorprofileComponent]
    });
    fixture = TestBed.createComponent(DonorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
