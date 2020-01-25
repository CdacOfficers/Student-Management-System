import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { admin } from '../admin';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // v1:number=0;
  // v2:string="";
  admin1 : admin=new admin();


  result:any=0;
  constructor(private router: Router,private studentservice:StudentService) { }
  // onSubmit():void
  // {
    
   
  //   if(this.v1=="randhir"&&this.v2=="singh")
  // {
  // this.router.navigate(['/student']);
  // }
  //   else
  //   {
  //     this.result="invalid user id or name";
  //     console.log('invalid login');
  //   }
  // }
  adminsaveform=new FormGroup({
    userId:new FormControl(),
    password:new FormControl()
  });
  onSubmit(savestudent){
    this.admin1.login_no=this.Name.value;
      this.admin1.password=this.Password.value;
      // if(this.Name.value=="admin" && this.Password.value=="1234")
      // {
      //   this.router.navigate(['/student']);
      // }
      // else{
      //   this.router.navigate(['']);
      // }
    this.studentservice.admin_check( this.admin1)
      .subscribe(
        data => {
          if(data)
          {
            this.router.navigate(['/student']);
          }  
          else
          {
            this.result="no";
          }       
        },
        error => console.log(error));
  }
  ngOnInit() {
  }
  get Name(){
    return this.adminsaveform.get('userId');
  }

  get Password(){
    return this.adminsaveform.get('password');
  }
}
