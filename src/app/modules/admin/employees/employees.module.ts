import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  declarations: [EmployeesComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    UtilsModule,
    ComponentsModule,
  ],
})
export class EmployeesModule {}
