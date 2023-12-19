import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleventListComponent } from './allevent-list.component';

describe('AlleventListComponent', () => {
  let component: AlleventListComponent;
  let fixture: ComponentFixture<AlleventListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlleventListComponent]
    });
    fixture = TestBed.createComponent(AlleventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
