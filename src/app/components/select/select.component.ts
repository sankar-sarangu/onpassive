import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentModel } from '../component.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() reqObj: ComponentModel;
  @Input() parentForm: FormGroup;
  @Input() isSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
