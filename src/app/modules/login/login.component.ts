import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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
    this.loginForm = this.fb.group({
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

  doLogin() {
    this.isSubmitted = true;
  }
}
