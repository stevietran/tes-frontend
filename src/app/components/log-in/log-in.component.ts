import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User, LoginResponse } from 'src/app/models/user'
import { UntypedFormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  emailFormControl = new UntypedFormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  viewData: any;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  onLogin(email: string, password: string ){
    const usr: User = {username: email.trim(), password: password.trim()};
    // console.log(usr);
    // this.viewData = usr; 
    if (usr){
      this.userService.logIn(usr)
      .subscribe({
        next: () => this.router.navigateByUrl("/design")
      })
    }
  }

  ngOnInit(): void {
  }

}
