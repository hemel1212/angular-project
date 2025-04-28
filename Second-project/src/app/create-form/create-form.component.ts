import { Component } from '@angular/core';
import { User } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-create-form',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
  user: User = new User('', 0, '', '', '', 0);
  isUpdate = false;
  getPlace: string = "";
  getRate: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    const nav = this.router.getCurrentNavigation();
    
    // Check if there's a user passed in state (for update scenario)
    if (nav?.extras.state && nav.extras.state['user']) {
      this.user = nav.extras.state['user'];
      this.isUpdate = true;

      // Set getPlace and getRate from the user data if updating
      this.getPlace = this.user.place || '';  // Assuming `place` is a property of User
      this.getRate = this.user.rate || 0;    // Assuming `rate` is a property of User
    }

    // Read query params from URL, if provided
    this.route.queryParams.subscribe(params => {
      this.getPlace = params['place'] || this.getPlace;
      this.getRate = params['rate'] || this.getRate;
    });
  }

  onSubmit() {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    // Update the existing user if isUpdate is true
    if (this.isUpdate) {
      users = users.map(x => (x.phone === this.user.phone ? { 
        ...this.user, place: this.getPlace, rate: this.getRate 
      } : x));
    } else {
      // Create a new user
      const newUser = { ...this.user, place: this.getPlace, rate: this.getRate };
      users.push(newUser);
    }

    // Save the updated list of users to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Reset the form and redirect after submit
    this.user = new User('', 0, '', '', '', 0);
    this.getPlace = '';
    this.getRate = 0;
    this.router.navigate(['/add-data']);
  }
}
