import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarUnloggedComponent } from './components/shared/navbar-unlogged/navbar-unlogged.component';
import { LandingHomeComponent } from './components/landing/landing-home/landing-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUnloggedComponent,
    LandingHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
