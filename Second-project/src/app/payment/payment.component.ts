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
    const userConfirmed = confirm('Are you sure to pay now?');
    
    if (userConfirmed) {
      // User clicked OK - redirect to home
      window.location.href = "card"; // Replace "home" with your actual home page URL
    } else {
      // User clicked Cancel - stay on the same page (do nothing)
      return;
    }
  
 }

}