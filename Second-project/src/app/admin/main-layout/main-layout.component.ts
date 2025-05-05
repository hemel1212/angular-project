import { Component } from '@angular/core';
import { LeftSideComponent } from "../left-side/left-side.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [LeftSideComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
