
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-package',
  imports: [FormsModule],
  templateUrl: './add-package.component.html',
  styleUrl: './add-package.component.css'
})
export class AddPackageComponent  {
  package = {
    packageName: '',
    price: null,
    duration: null
  };

  constructor() {}

  onSubmit() {
    if (this.package.packageName && this.package.price !== null && this.package.duration !== null) {
      // Replace this with actual logic like sending data to an API
      console.log('Package created:', this.package);

      // Optionally reset the form
      this.package = {
        packageName: '',
        price: null,
        duration: null
      };
    } else {
      console.error('Form is incomplete');
    }
  }
}
