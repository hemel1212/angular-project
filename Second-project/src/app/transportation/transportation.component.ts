
import { Component } from '@angular/core';
import { NavberComponent } from "./navber/navber.component";
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transportation',
  imports: [NavberComponent, CommonModule,],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.css'
})
export class TransportationComponent {
  cities: string[] = ['Dhaka', 'Chattogram', 'Rangpur', 'Sylhet', 'Rajshahi', 'Jessore', 'Comilla', 'Brahmanbaria'];

  tripType: 'oneway' | 'roundtrip' = 'oneway'; // Track selected trip type

  constructor(private router: Router) { }

  goToNext() {
    this.router.navigate(['/type']);
  }

  onTripTypeChange(type: 'oneway' | 'roundtrip') {
    this.tripType = type;
  }
}

