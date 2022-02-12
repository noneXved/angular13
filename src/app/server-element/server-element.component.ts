import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styles: [
  ]
})
export class ServerElementComponent {
  @Input() public element: {type: string, name: string, content: string} = { type: 'Test', name: 'Testname', content: 'Test Content'}


  constructor() {}

}
