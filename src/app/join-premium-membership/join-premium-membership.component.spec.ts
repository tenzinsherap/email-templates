import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinPremiumMembershipComponent } from './join-premium-membership.component';

describe('JoinPremiumMembershipComponent', () => {
  let component: JoinPremiumMembershipComponent;
  let fixture: ComponentFixture<JoinPremiumMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinPremiumMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinPremiumMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
