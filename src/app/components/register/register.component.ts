import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  first_name: string="";
  surname: string="";
  email: string="";
  password: string="";
  
  private reqObject: SignupRequest = {email: "", password: ""};
  
  Roles = ['Admin', 'User'];
  viewData: any;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  onRegister(){
    if (this.first_name){
      this.reqObject.first_name = this.first_name;
    }
    if (this.surname){
      this.reqObject.surname = this.surname;
    }
    if (this.email){
      this.reqObject.email = this.email;
    }
    if (this.password){
      this.reqObject.password = this.password;
    }
    
    //this.viewData = this.reqObject;
    this.userService.signUp(this.reqObject)
    .subscribe({
      next: () => this.router.navigateByUrl('/login')
    })
    //this.router.navigateByUrl('/login')
  }
  changeRoleOption(value: string){
    if (this.reqObject){
      //this.reqObject.request_role = value;
      this.reqObject.is_superuser = false;
      this.reqObject.is_user = true;
    }
  }

  ngOnInit(): void {
  }

}
