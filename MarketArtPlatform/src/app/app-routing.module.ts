import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingHomeComponent } from './components/landing/landing-home/landing-home.component'
import { LoginArtistComponent } from './components/login/login-artist/login-artist.component'
import { RegisterArtistComponent } from './components/register/register-artist/register-artist.component'
import { SelectArtComponent } from './components/register/select-art/select-art.component'

const routes: Routes = [
  {
    path: '',
    component: LandingHomeComponent
  },
  {
    path: 'login',
    component: LoginArtistComponent
  },
  {
    path: 'register',
    component: RegisterArtistComponent
  },
  {
    path: 'select-art',
    component: SelectArtComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
