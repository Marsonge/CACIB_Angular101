import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'CACIB-workshop';
  employees = [ { first:'Tim', last:'Caillot'} ]; //Remove this or keep this, it's just to show you how a list works
  
  //Everything in here happens when the component inits (like a constructor)
  ngOnInit(){
	    console.log(this.employees.length); //Check the browser console!
  }
}
