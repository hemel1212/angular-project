import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../app.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-add-data',
  imports: [HeaderComponent],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})
export class AddDataComponent implements OnInit{
  users: User[] = [];

  constructor (private rouuer: Router){}

  ngOnInit() {
      this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  editUser(user : User){
    this.rouuer.navigate(['/create-form'], {state: {user}});
  }

  deleteSource(user: User){
    if(confirm("Are you sure to Cancel?")){
      this.users = this.users.filter(x => x !== user);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
}