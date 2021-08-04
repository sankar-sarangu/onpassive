import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentModel } from '../component.model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() reqObj: ComponentModel;
  @Input() isSubmitted: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
