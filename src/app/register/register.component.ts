import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RegisterAgent } from '../models/registerAgent';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  isAdmin: boolean = false;
  id: number;

  model: any = {};

  ngOnInit() {}

  register(form: NgForm) {
    if ((this.isAdmin = true)) {
      this.model.password = '123456';
      this.model.confirmPassword = '123456';
      this.authService.register(this.model);
      
    }
  }

  getAdmin() {
    this.id = this.authService.getCurrentUserId();
    if (this.id === 1) {
      this.isAdmin == true;
    }
  }
}
