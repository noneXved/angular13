import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  error: string = 'This password is not correct!';
  isVisible: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 1000)
  }

  onHandleError() {
    this.isVisible = false;
  }



  onChangePassword(): void {
    {}
  }
}
