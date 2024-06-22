import { Routes } from '@angular/router';
import { EmployeesComponent } from './pages/employees/employees.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes =
[
    {
        path:'',component:HomeComponent
    },
    {
        path:'employees',component:EmployeesComponent
    }

];
