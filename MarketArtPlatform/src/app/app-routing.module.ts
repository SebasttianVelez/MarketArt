import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingHomeComponent } from './components/landing/landing-home/landing-home.component'
import { LoginArtistComponent } from './components/login/login-artist/login-artist.component'

const routes: Routes = [
  {
    path: '',
    component: LandingHomeComponent
  },
  {
    path: 'login',
    component: LoginArtistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
