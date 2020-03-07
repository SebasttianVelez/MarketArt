import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarUnloggedComponent } from './components/shared/navbar-unlogged/navbar-unlogged.component';
import { LandingHomeComponent } from './components/landing/landing-home/landing-home.component';
import { LoginArtistComponent } from './components/login/login-artist/login-artist.component';
import { RegisterArtistComponent } from './components/register/register-artist/register-artist.component';
import { SelectArtComponent } from './components/register/select-art/select-art.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUnloggedComponent,
    LandingHomeComponent,
    LoginArtistComponent,
    RegisterArtistComponent,
    SelectArtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
