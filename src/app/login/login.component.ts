import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  loginAgent: any = {};
  
  ngOnInit() {}

  login() {
    this.authService.login(this.loginAgent);
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }

  register() {
    this.router.navigate(['/register']);
  }
}
