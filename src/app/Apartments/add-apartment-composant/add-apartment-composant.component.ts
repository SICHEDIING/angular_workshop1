import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from '../../core/models/apartments'; // Assure-toi que le chemin est correct

@Component({
  selector: 'app-add-apartment-composant',
  templateUrl: './add-apartment-composant.component.html',
  styleUrls: ['./add-apartment-composant.component.css']
})
export class AddApartmentComposantComponent implements OnInit {
  residenceId!: number;
  apartment: Apartment; // Utilisation du modèle Apartment

  constructor(private route: ActivatedRoute, private router: Router) {
    // Initialisation de l'appartement avec des valeurs par défaut
    this.apartment = new Apartment(0, 0, 0, 0, false, 0, '', 0);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.residenceId = Number(id);
      this.apartment.ResidenceId = this.residenceId; // Correction de l'affectation
    } else {
      console.error("ID de résidence introuvable !");
    }
  }

  addApartment() {
    console.log('Ajout de l\'appartement', this.apartment);
    // Logique pour envoyer les données à une API ou un service
    this.router.navigate(['/apartments']); // Redirection après ajout
  }
}
