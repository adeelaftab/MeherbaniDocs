import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { AdsComponent } from './components/site/ads/ads.component';
import { FundraisingComponent } from './components/site/fundraising/fundraising.component';
import { DonationComponent } from './components/site/donation/donation.component';
import { LendComponent } from './components/site/lend/lend.component';
import { StoriesComponent } from './components/site/stories/stories.component';
import { SigninComponent } from './components/site/signin/signin.component';
import { SignupComponent } from './components/site/signup/signup.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ads', component: AdsComponent },
  { path: 'fundraising', component: FundraisingComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'lend', component: LendComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'signin', component: SigninComponent } ,
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
