import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Employee } from '../modules/admin/employees/employees.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeSubject = new BehaviorSubject<any>([]);
  getEmployees = this.employeeSubject.asObservable();

  constructor() {}

  /**
   * TODO: comment updateInventory
   * Updates inventory
   * @author Siva Sankar.S
   * @param data
   */
  updateInventory(data: Employee[]) {
    this.employeeSubject.next(data);
  }

  getJobTitles() {
    return [
      'Sr. Software Engineer',
      'Software Trainee',
      'Associate Software Trainee',
    ];
  }

  getDepartments() {
    return ['UI Developer', 'Designer', 'Tester'];
  }

  getLocations() {
    return ['Hyderabad', 'Chennai', 'Bangalore'];
  }
}
