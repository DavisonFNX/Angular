import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFilmsComponent } from './form-films/form-films.component';
import { FormMusicasComponent } from './form-musicas/form-musicas.component';
import { FormPodcastsComponent } from './form-podcasts/form-podcasts.component';

const routes: Routes = [
  { path: 'filmes', component: FormFilmsComponent},
  { path: 'musicas', component: FormMusicasComponent},
  { path: 'podcasts', component: FormPodcastsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
