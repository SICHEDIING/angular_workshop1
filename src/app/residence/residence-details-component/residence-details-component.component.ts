import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details-component',
  templateUrl: './residence-details-component.component.html',
  styleUrls: ['./residence-details-component.component.css']
})
export class ResidenceDetailsComponentComponent implements OnInit {
  residenceId!: number;  // Assure-toi que cette ligne existe

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
  }

  goToNextResidence() {
    const nextId = this.residenceId + 1;
    this.router.navigate(['/residences', nextId]);
  }
}
