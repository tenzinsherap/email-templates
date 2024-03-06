import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'job-renewal', component: JobRenewalComponent},
  {path: 'job-posting', component: JobPostingComponent},
  {path: 'event-review', component:EventReviewComponent},
  {path: 'event-approved', component:EventApprovedComponent},
  {path: 'lifestyle-review', component:LifestyleReviewComponent}, 
  {path: 'lifestyle-approved', component:LifestyleApprovedComponent},
  {path: 'free-membership', component:FreeMembershipComponent},
  {path:'premium-membership', component:PremiumMembershipComponent}, 
  {path:'join-premium-membership', component:JoinPremiumMembershipComponent}, 
  {path: 'premium-renewal', component:PremiumRenewalComponent},
  {path: 'event-decline', component:EventDeclineComponent},
  {path:'lifestyle-decline', component:LifestyleDeclineComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
