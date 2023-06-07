import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Mocks/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees!: any[];

  constructor(private router: Router) {
    this.employees = Employee;
  }

  ngOnInit(): void {

  }

  checkDetails(employee: any) {
    this.router.navigate(['/employees', employee.id]);
  }
}
