import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSoldComponent } from './event-sold.component';

describe('EventSoldComponent', () => {
  let component: EventSoldComponent;
  let fixture: ComponentFixture<EventSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
