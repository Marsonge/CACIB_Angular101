import { Component } from '@angular/core';

@Component ({
  selector: 'directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent {
    totoFoorbar = false; 
	customers = {[{ last_name : 'Toto', first_name : 'Foobar'}, { last_name: 'Wang', first_name: 'Xiaoming'}]}
}

