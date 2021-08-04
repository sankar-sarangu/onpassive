import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentModel } from '../component.model';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
})
export class NumberComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() reqObj: ComponentModel;
  @Input() isSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
