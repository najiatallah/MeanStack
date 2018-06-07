import { Component, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  @ViewChild('f') loginForm: NgForm;


  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    console.log('Login page loaded');
  }

  onSubmit() {

    const iEmail =  this.loginForm.value.inputEmail;     
    const iPassword = this.loginForm.value.inputPassword;

    this.authService.signinUser(iEmail, iPassword)
      .subscribe(
        data => {
          if (data.status == 200){
            const tk = data.token;
            const user = data.user; 
            console.log(`@@sucess : - token ${tk} and user ${JSON.stringify(user)}`);
          }
          else{
            console.log(`@ failure : - data ${data.message}`);
          }
        },
        error => {
          console.log(`error is : ${error}`);
        });
  }

}
