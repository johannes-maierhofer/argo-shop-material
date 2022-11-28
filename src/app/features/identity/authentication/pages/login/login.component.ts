import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HeaderService } from 'src/app/core/services/header.service';
import { AuthenticationService } from '../../services/authentication.service';

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
    private location: Location
  ) { }

  ngOnInit() {
    this.header.setHeaderButtonsVisibility(false);
  }

  login() {
    const credentials = this.loginForm.value;

    // this.authService.login(
    //   credentials.email,
    //   credentials.password
    // ).subscribe(
    //   () => {
    //     this.session.setLoggedInStatus(true);
    //     this.location.back();
    //   },
    //   err => {
    //     this.snackBar.open(
    //       'Login failed. Check your login credentials.',
    //       'Close',
    //       { duration: 6000 });

    //     this.loginForm.patchValue({ password: '' });
    //   }
    // );
  }
}
