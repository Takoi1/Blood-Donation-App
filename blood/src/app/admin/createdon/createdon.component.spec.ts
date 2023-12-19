import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedonComponent } from './createdon.component';

describe('CreatedonComponent', () => {
  let component: CreatedonComponent;
  let fixture: ComponentFixture<CreatedonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedonComponent]
    });
    fixture = TestBed.createComponent(CreatedonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
