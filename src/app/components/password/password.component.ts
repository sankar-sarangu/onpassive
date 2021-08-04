import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentModel } from '../component.model';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() reqObj: ComponentModel;
  @Input() isSubmitted: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
