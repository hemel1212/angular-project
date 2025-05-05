import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deshboard',
  imports: [CommonModule],
  templateUrl: './deshboard.component.html',
  styleUrl: './deshboard.component.css'
})
export class DeshboardComponent  implements OnInit {
  bookingsToday: number = 120;
  activeUsers: number = 350;
  revenue: number = 5000;
  recentActivities: Array<{ time: string, description: string }> = [
    { time: '2 hours ago', description: 'User Rasel booked a flight to Paris.' },
    { time: '5 hours ago', description: 'User Himu canceled her booking to Rome.' },
    { time: '1 day ago', description: 'User Iqram added a new review for Bali.' }
  ];
  destinations: Array<{ name: string, image: string, description: string }> = [
    { name: 'Paris', image: 'images/Paris.jpg', description: 'The city of lights.' },
    { name: 'Bali', image: 'images/Bali.jpg', description: 'A tropical paradise.' },
    { name: 'New York', image: 'images/New York.jpg', description: 'The city that never sleeps.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
