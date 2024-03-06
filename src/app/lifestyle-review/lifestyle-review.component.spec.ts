import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleReviewComponent } from './lifestyle-review.component';

describe('LifestyleReviewComponent', () => {
  let component: LifestyleReviewComponent;
  let fixture: ComponentFixture<LifestyleReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestyleReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
