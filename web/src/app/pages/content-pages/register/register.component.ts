import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  onSubmit() {
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const floatEmail = this.registerForm.value.floatEmail;
    const floatPassword = this.registerForm.value.floatPassword;

    this.authService.registerUser(firstName, lastName, floatEmail, floatPassword)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(`error is : ${error}`);
        });
  }


}
