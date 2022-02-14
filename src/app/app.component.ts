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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted: boolean = false;

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
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset()
  }
}
