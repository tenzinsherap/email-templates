import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRefundComponent } from './event-refund.component';

describe('EventRefundComponent', () => {
  let component: EventRefundComponent;
  let fixture: ComponentFixture<EventRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
