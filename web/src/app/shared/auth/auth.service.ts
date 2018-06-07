import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class AuthService {

    token: string;

    constructor(private http: Http) { }


    signupUser(email: string, password: string) {
        //your code for signing up the new user
    }

    signinUser(email: string, password: string) {
        return this.http.post(`${API_URL}/api/users/login`, { email: email, password: password })
            .map(res=> res.json());
    }

    logout() {
        this.token = null;
    }

    getToken() {
        return this.token;
    }

    isAuthenticated() {
        // here you can check if user is authenticated or not through his token 
        return true;
    }
}
