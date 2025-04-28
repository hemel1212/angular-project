import { Component } from '@angular/core';
import { NavberComponent } from "./navber/navber.component";
import { HeaderComponent } from "../header/header.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-transportation',
  imports: [NgFor, NavberComponent],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.css'
})
export class TransportationComponent {

  
   cities: string[] = ['Dhaka', 'Chattogram', 'Rangpur' , 'Sylhet' , 'Rajshahi' , 'Jessore' , 'Comilla' , 'Brahmanbaria'];

   submitForm() {
    alert("Are  you sure to buy this Ticket?");
    // window.location.reload();
    window.location.href="card";
   }

}
