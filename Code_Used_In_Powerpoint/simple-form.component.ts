import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html'
})
export class SimpleFormComponent {
  name = new FormControl('');
}