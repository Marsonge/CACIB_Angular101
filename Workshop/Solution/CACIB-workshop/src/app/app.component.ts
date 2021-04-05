import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'CACIB-workshop';
  employees: Employee[] = [];
  first = new FormControl('');
  last = new FormControl('');
  // Everything in here happens when the component inits (like a constructor)

  ngOnInit(){
    this.employees.push({ first: 'Tim', last: 'Caillot'}); // Remove this or keep this, it's just to show you how a list works
    console.log(this.employees.length); // Check the browser console!
  }

  addEmployee(){
    this.employees.push( { first: this.first.value, last: this.last.value });
    this.first.reset();
    this.last.reset();
    console.log(this.employees.length); // Check the browser console!
  }
}

export interface Employee {
  first: string;
  last: string;
}
