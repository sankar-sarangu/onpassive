import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formValidations();
  }

  /**
   * TODO: comment formValidations
   * Forms validations
   * @author Siva Sankar.S
   */
  formValidations() {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.email,
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ]),
      ],
      password: ['', Validators.required],
    });
  }

  doSignUp() {
    this.isSubmitted = true;
  }
}
