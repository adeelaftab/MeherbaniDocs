import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/site/home/home.component';
import { AdsComponent } from './components/site/ads/ads.component';
import { FundraisingComponent } from './components/site/fundraising/fundraising.component';
import { DonationComponent } from './components/site/donation/donation.component';
import { LendComponent } from './components/site/lend/lend.component';
import { StoriesComponent } from './components/site/stories/stories.component';
import { SigninComponent } from './components/site/signin/signin.component';
import { SignupComponent } from './components/site/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdsComponent,
    FundraisingComponent,
    DonationComponent,
    LendComponent,
    StoriesComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
