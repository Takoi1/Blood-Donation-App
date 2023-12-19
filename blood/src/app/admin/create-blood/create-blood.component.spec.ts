import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBloodComponent } from './create-blood.component';

describe('CreateBloodComponent', () => {
  let component: CreateBloodComponent;
  let fixture: ComponentFixture<CreateBloodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBloodComponent]
    });
    fixture = TestBed.createComponent(CreateBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
