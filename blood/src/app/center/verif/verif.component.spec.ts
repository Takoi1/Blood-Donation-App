import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifComponent } from './verif.component';

describe('VerifComponent', () => {
  let component: VerifComponent;
  let fixture: ComponentFixture<VerifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifComponent]
    });
    fixture = TestBed.createComponent(VerifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
