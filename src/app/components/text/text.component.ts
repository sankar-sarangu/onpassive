import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentModel } from '../component.model';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() reqObj: ComponentModel;
  @Input() isSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
