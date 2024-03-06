import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventApprovedComponent } from './event-approved.component';

describe('EventApprovedComponent', () => {
  let component: EventApprovedComponent;
  let fixture: ComponentFixture<EventApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
