import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;
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
    this.resetForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.email,
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ]),
      ],
    });
  }

  doReset() {
    this.isSubmitted = true;
  }
}
