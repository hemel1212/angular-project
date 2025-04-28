import { Component } from '@angular/core';
import { NavberComponent } from "./navber/navber.component";
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transportation',
  imports: [NgFor, NavberComponent],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.css'
})
export class TransportationComponent {


  cities: string[] = ['Dhaka', 'Chattogram', 'Rangpur', 'Sylhet', 'Rajshahi', 'Jessore', 'Comilla', 'Brahmanbaria'];

  constructor(private router: Router) { }

  // This method will be triggered when you click the 'Go To Next' button
  goToNext() {
    // Navigate to the next page, where you have the modal (for example '/next-page')
    this.router.navigate(['/type']);
  }

  test(){
    console.log("ok")
  }

}
