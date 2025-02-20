
   import { Component, OnInit } from '@angular/core';
    import { Router } from '@angular/router';
    
    interface Residence {
      id: number;
      name: string;
      location: string;
      description: string;
    }
    
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {
      residences: Residence[] = [
        { id: 1, name: 'Résidence A', location: 'Tunis', description: 'Belle résidence à Tunis' },
        { id: 2, name: 'Résidence B', location: 'Sousse', description: 'Vue sur mer à Sousse' },
        { id: 3, name: 'Résidence C', location: 'Djerba', description: 'Résidence calme et paisible' }
      ];
    
      constructor(private router: Router) {}
    
      ngOnInit(): void {}
    
      goToDetails(id: number) {
        this.router.navigate(['/residences', id]);
      }
    }
    