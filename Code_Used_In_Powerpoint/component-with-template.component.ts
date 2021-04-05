import { Component } from '@angular/core';

@Component ({
  selector: 'component-with-template',
  templateUrl: './component-with-template.component.html'
})
export class HelloWorldInterpolationComponent {
    message = 'Hello, World!';
	fontColor = 'blue';
}

