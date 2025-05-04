import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  showAddCardForm = false;

  newCard = {
    place: '',
    rate: 0,
    description: '',
    image: ''
  };

  toggleAddCard() {
    this.showAddCardForm = !this.showAddCardForm;
  }

  addCard() {
    console.log('New card added:', this.newCard);

    // Reset form
    this.newCard = {
      place: '',
      rate: 0,
      description: '',
      image: ''
    };
    this.showAddCardForm = false;
  }

  onsubmit(){
    this.showAddCardForm =! this.showAddCardForm;
  }
}
