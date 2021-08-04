import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';

import { ConfirmationService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ConfirmPopupModule,
    TooltipModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
  ],
  exports: [
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ConfirmPopupModule,
    TooltipModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
  ],
  providers: [ConfirmationService],
})
export class UtilsModule {}
