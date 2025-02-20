import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { HeaderComponent } from './header/header.component';
import { ApartmentsComponentComponent } from './Apartments/apartments-component/apartments-component.component';
import { ApartmentsByResidenceComponentComponent } from './Apartments/apartments-by-residence-component/apartments-by-residence-component.component';

import { AddApartmentComposantComponent } from './Apartments/add-apartment-composant/add-apartment-composant.component';

import { ResidenceDetailsComponentComponent } from './residence/residence-details-component/residence-details-component.component';


import { AddResidenceComponenetComponent } from './residence/add-residence-componenet/add-residence-componenet.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    HeaderComponent,
    ApartmentsComponentComponent,
    ApartmentsByResidenceComponentComponent,
    AddApartmentComposantComponent,
    ResidenceDetailsComponentComponent,
    AddResidenceComponenetComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
