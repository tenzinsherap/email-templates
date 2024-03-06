import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumRenewalComponent } from './premium-renewal.component';

describe('PremiumRenewalComponent', () => {
  let component: PremiumRenewalComponent;
  let fixture: ComponentFixture<PremiumRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumRenewalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
