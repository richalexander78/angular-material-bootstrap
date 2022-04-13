import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { MaterialElevationDirective } from './material-elevation.directive';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import { CustomIconService } from "./services/custom-icon.service";
import { HttpService } from './http.service';
import { LoanOfficerProfileComponent } from './loan-officer-profile/loan-officer-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    FooterComponent,
    ScrollTopComponent,
    MaterialElevationDirective,
    LandingPageComponent,
    LoanOfficerProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    // CustomIconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
