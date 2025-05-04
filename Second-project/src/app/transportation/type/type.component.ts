import { Component } from '@angular/core';
import { NavberComponent } from '../navber/navber.component';

@Component({
  selector: 'app-type',
  imports: [NavberComponent],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {

  submitForm() {
    alert("Are  you sure to buy this Ticket?");
    // window.location.reload();
    window.location.href="payment";
   }

   closeForm(){
    window.location.href="card";
   }
}
