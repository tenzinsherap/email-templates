import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipChangeComponent } from './membership-change.component';

describe('MembershipChangeComponent', () => {
  let component: MembershipChangeComponent;
  let fixture: ComponentFixture<MembershipChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
