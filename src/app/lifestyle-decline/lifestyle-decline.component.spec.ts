import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleDeclineComponent } from './lifestyle-decline.component';

describe('LifestyleDeclineComponent', () => {
  let component: LifestyleDeclineComponent;
  let fixture: ComponentFixture<LifestyleDeclineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestyleDeclineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
