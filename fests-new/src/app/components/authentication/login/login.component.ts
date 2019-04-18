import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

import { AuthenticationService } from '../../../core/services/authentication.service';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [appAnimations]
})
export class LoginComponent implements OnInit {
    errorMsg : string;

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,}$/)]),
        password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,16}$/)])
    });
    
    constructor(private authService : AuthenticationService,
            private router: Router) { }

  ngOnInit() {
  }
  
  clearError() {
     this.errorMsg = undefined; 
  }
  
  onSubmit() {
      if (this.authService.isLogged()) {
          this.router.navigate(['/']);
      } else {
          this.authService
              .login(this.loginForm.value).subscribe();
      }
  }
}
