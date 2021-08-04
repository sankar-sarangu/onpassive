import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { NumberComponent } from './number/number.component';
import { SelectComponent } from './select/select.component';
import { UtilsModule } from '../utils/utils.module';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';

const COMPONENTS = [
  TextComponent,
  NumberComponent,
  SelectComponent,
  EmailComponent,
  PasswordComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, UtilsModule],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
