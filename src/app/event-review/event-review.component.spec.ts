import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReviewComponent } from './event-review.component';

describe('EventReviewComponent', () => {
  let component: EventReviewComponent;
  let fixture: ComponentFixture<EventReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
