import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  employees:any;
  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    // fetching the employees on sthe initialization of the employee component
    this.fetchEmployees();
  }

  fetchEmployees(){
    this.apiService.loadEmployees().subscribe({
      next: response => {
        this.employees =  response;
      },
      error:error => {
        console.log(error)
      }
    })
  }
}
