import { Component } from '@angular/core';
import { NavberComponent } from '../transportation/navber/navber.component';

@Component({
  selector: 'app-payment',
  imports: [NavberComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  payNow() {
    // alert('Payment successful! Ticket booked.');
    confirm('Are you sure to pay now?');
    // Redirect to confirmation or home
    window.location.href="card";
  }
  
}



