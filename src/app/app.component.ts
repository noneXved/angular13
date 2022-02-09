import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular13';
  username: string = "Damian";
  isCreated: boolean = true;

  clearUsername() {
    this.isCreated = !this.isCreated;
    this.username = '';
  }

  getColor() {
    return this.username === 'Damian' ? 'green' : 'red';
  }
}
