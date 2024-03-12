import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JobRenewalComponent } from './job-renewal/job-renewal.component';
import { HomeComponent } from './home/home.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { EventReviewComponent } from './event-review/event-review.component';
import { EventApprovedComponent } from './event-approved/event-approved.component';
import { LifestyleReviewComponent } from './lifestyle-review/lifestyle-review.component';
import { LifestyleApprovedComponent } from './lifestyle-approved/lifestyle-approved.component';
import { FreeMembershipComponent } from './free-membership/free-membership.component';
import { PremiumMembershipComponent } from './premium-membership/premium-membership.component';
import { JoinPremiumMembershipComponent } from './join-premium-membership/join-premium-membership.component';
import { PremiumRenewalComponent } from './premium-renewal/premium-renewal.component';
import { EventDeclineComponent } from './event-decline/event-decline.component';
import { LifestyleDeclineComponent } from './lifestyle-decline/lifestyle-decline.component';
import { EventRefundComponent } from './event-refund/event-refund.component';
import { MembershipChangeComponent } from './membership-change/membership-change.component';

@NgModule({
  declarations: [
    AppComponent,
    JobRenewalComponent,
    HomeComponent,
    JobPostingComponent,
    EventReviewComponent,
    EventApprovedComponent,
    LifestyleReviewComponent,
    LifestyleApprovedComponent,
    FreeMembershipComponent,
    PremiumMembershipComponent,
    JoinPremiumMembershipComponent,
    PremiumRenewalComponent,
    EventDeclineComponent,
    LifestyleDeclineComponent,
    EventRefundComponent,
    MembershipChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
