import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  defaultQuestion: string = 'teacher';
  answer: string = '';
  genders = [ 'male', 'female']
  suggestUserName() {
    const suggestedName = 'Superuser';

    // Set default values for all cells (override)
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    })

    // Set default values for empty cells
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  onSubmit() {
    console.log(this.signupForm)
  }
}
