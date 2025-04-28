import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
}
export class User{
  name: string;
  nid: number;
  phone: string;
  address: string;
  place: string;
  rate: number;

  constructor(name: string, nid: number, phone: string, address: string, place: string, rate: number){
    this.name = name;
    this.nid = nid;
    this.phone = phone;
    this.address = address;
    this.place = place;
    this.rate = rate;
  }
}