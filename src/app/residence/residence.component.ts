import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpg", status: "Disponible",showAddress: false},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible",showAddress: false },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu",showAddress: false},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R3.jpg", status: "En Construction",showAddress: false}
   ];
 
  showA=false;
  show (R:Residence)
  {
   R.showAddress = !R.showAddress;
   if (R.address=="inconnu"){alert( "adress inconnu");}
   else{this.showA=true}
  }
  favorites: Residence[] = [];

  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
      alert(`${residence.name} a été ajouté aux favoris ❤️`);
    } else {
      alert(`${residence.name} est déjà dans vos favoris ❤️`);
    }
  }
  
  

  searchTerm: string = '';
 
  

}
