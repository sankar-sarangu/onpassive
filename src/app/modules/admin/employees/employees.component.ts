import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from './employees.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employeeList: Employee[] = [];
  loading: boolean = true;
  isVisible: boolean = false;
  employee: Employee;
  headerTitle: string = '';

  constructor(
    private confirmationService: ConfirmationService,
    private service: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.getEmployees();
  }

  /**
   * TODO: comment getEmployees
   * Gets products
   * @author Siva Sankar.S
   */
  getEmployees() {
    this.service.getEmployees.subscribe((data) => {
      this.employeeList = data;
    });
  }

  /**
   * TODO: comment updateEmployee
   * Updates product
   * @author Siva Sankar.S
   * @param [product]
   */
  updateEmployee(employee?: Employee) {
    if (employee) this.router.navigate([`/employees/form/${employee.id}`]);
    else this.router.navigate([`/employees/form`]);
  }

  /**
   * TODO: comment confirm
   * Confirms products component
   * @author Siva Sankar.S
   * @param event
   * @param index
   */
  confirm(event: Event, index: number) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.employeeList.splice(index, 1);
        this.service.updateInventory(this.employeeList);
      },
      reject: () => {
        //reject action
      },
    });
  }
}
