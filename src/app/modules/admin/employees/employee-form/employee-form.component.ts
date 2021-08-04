import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  jobTitles: string[];
  departments: string[];
  locations: string[];
  employeeForm: FormGroup;
  employeesList: Employee[];
  isSubmitted: boolean = false;

  constructor(
    private service: EmployeeService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.jobTitles = this.service.getJobTitles();
    this.departments = this.service.getDepartments();
    this.locations = this.service.getLocations();

    this.service.getEmployees.subscribe((data) => {
      this.employeesList = data;
    });
    this.formValidations();
    this.activatedRoute.params.subscribe((param) => {
      if (param && param.id)
        this.setFormValues(
          this.employeesList.find((elem) => elem.id == param.id)
        );
    });
  }

  /**
   * TODO: comment formValidations
   * Forms validations
   * @author Siva Sankar.S
   */
  formValidations() {
    this.employeeForm = this.fb.group({
      id: [null],
      fullName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      location: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  /**
   * TODO: comment setFormValues
   * Sets form values
   * @author Siva Sankar.S
   * @param formObj
   */
  setFormValues(formObj: Employee) {
    [
      'id',
      'fullName',
      'jobTitle',
      'department',
      'location',
      'age',
      'salary',
    ].forEach((ctrl) => {
      this.employeeForm.get(ctrl).setValue(formObj[ctrl]);
    });
  }

  /**
   * TODO: comment onSubmit
   * Determines whether submit on
   * @author Siva Sankar.S
   * @param e
   */
  onSubmit(e) {
    this.isSubmitted = true;
    if (this.employeeForm.invalid) return true;

    let formObj = this.employeeForm.value;
    if (this.employeesList && this.employeesList.length) {
      let index = this.employeesList.findIndex((elem) => elem.id == formObj.id);
      if (index >= 0) {
        this.employeesList[index] = formObj;
        this.service.updateInventory(this.employeesList);
      } else {
        formObj.id = this.employeesList.length + 1;
        this.employeesList.push(formObj);
        this.service.updateInventory(this.employeesList);
      }
    } else {
      let temp = [];
      formObj.id = 1;
      temp.push(formObj);
      this.service.updateInventory(temp);
    }
    this.onClose(e);
  }

  /**
   * TODO: comment onClose
   * Determines whether close on
   * @author Siva Sankar.S
   * @param e
   */
  onClose(e) {
    this.router.navigate(['/employees/list']);
  }
}
