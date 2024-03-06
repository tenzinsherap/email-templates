import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleApprovedComponent } from './lifestyle-approved.component';

describe('LifestyleApprovedComponent', () => {
  let component: LifestyleApprovedComponent;
  let fixture: ComponentFixture<LifestyleApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestyleApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
