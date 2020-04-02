import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'inline-login-form',
  templateUrl: './inline-login-form.component.html',
  styleUrls: ['./inline-login-form.component.css']
})
export class InlineLoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['']
    });
  }

  login() {
    if (this.loginForm.valid) {
      // TODO: Auth - status check to give user feedback on success/fail
      return this.authService.login(this.loginForm.value).subscribe();
    }
  }

  logout() {
    // TODO: Auth - status check and redirect if necessary
    this.authService.logout();
  }

}
