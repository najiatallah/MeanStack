import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginPageComponent } from "./login/login-page.component";
import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";


const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'login', component: LoginPageComponent, data: { title: 'Login Page' } },
            { path: 'error', component: ErrorPageComponent, data: { title: 'Error Page' } },
            { path: 'forgotpassword', component:ForgotPasswordPageComponent, data: { title: 'Forgot Password Page' }}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContentPagesRoutingModule {

    constructor() {
        console.log('lazy ContentPagesRoutingModule loaded');
    }

}