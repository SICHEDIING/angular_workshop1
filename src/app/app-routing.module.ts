import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'residences', component: ResidenceComponent }, // Liste des résidences
  { path: '**', component: NotFoundComponent } // Page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
