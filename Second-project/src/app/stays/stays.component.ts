import { Component } from '@angular/core';
import { NavberComponent } from "../transportation/navber/navber.component";

@Component({
  selector: 'app-stays',
  imports: [NavberComponent],
  templateUrl: './stays.component.html',
  styleUrl: './stays.component.css'
})
export class StaysComponent {

  submitForm() {
    alert("Are  you sure to booked this room");
    window.location.href="payment";
  }

}
