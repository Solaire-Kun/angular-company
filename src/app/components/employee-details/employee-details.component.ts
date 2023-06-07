import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Mocks/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeId?: any;
  employee: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id')
    console.log(this.employeeId)
    Employee.forEach(employee => {
      if (employee.id == this.employeeId) {
        this.employee = employee
      }
    })
  }
}
