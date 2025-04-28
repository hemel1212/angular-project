import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() contentChange = new EventEmitter<string>();

  showContent(page: string) {
    this.contentChange.emit(page);
    const sidebar = bootstrap.Offcanvas.getInstance(document.getElementById('sidebarMenu')!)!;
    sidebar.hide(); // Close the sidebar after clicking
  }

}
