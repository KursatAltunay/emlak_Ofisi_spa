import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginAgent } from '../models/loginAgent';
import { RegisterAgent } from '../models/registerAgent';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  path = 'https://localhost:44393/api/auth';
  agentToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
  TOKEN_KEY = 'token';
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(loginAgent: LoginAgent) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + '/login', loginAgent, { headers: headers })
      .subscribe((data) => {
        this.saveToken(data);
        this.agentToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data["token"].tostring());
        console.log(this.getCurrentUserId());
        window.alert('Sisteme giriş yapıldı');
        this.router.navigateByUrl('/agent');
      });
  }

  register(registerAgent: RegisterAgent) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + '/register', { headers: headers })
      .subscribe((data) => {});
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    window.alert('Sistemden çıkış yapıldı');
  }

  loggedIn() {
    return tokenNotExpired(this.TOKEN_KEY);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUserId() {
    return this.jwtHelper.decodeToken(this.token).nameId;
  }
}
