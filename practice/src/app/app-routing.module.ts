import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'student', redirectTo: '/student/view-student', pathMatch: 'full' },
  {  path :'student', component: StudentComponent,
  children : [
    {path:'add-student',  component: AddStudentComponent},
    {path: 'view-student', component: StudentListComponent}
   
]},
  // { path: 'add-student', component: AddStudentComponent },
  { path: 'login', component:LoginComponent ,}
  // {path:'register',  component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
