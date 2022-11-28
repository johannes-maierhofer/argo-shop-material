import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private authService: AuthenticationService,
    // private session: SessionService,
    private formBuilder: FormBuilder,
    private header: HeaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.header.setHeaderButtonsVisibility(false);
  }

  login() {
    const credentials = this.loginForm.value;

    this.authService.login(
      credentials.email ?? '',
      credentials.password ?? ''
    ).subscribe(result => {
      console.log('Successfully logged in: ' + JSON.stringify(result));
      this.router.navigateByUrl('');
    });
  }
}
