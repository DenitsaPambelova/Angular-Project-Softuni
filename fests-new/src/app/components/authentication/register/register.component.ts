import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthenticationService } from '../../../core/services/authentication.service';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [appAnimations]
})
export class RegisterComponent implements OnInit {
  
  registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,}$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z]+@[a-z]+\.[a-z]+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,16}$/)]),
      confirmPassword: new FormControl('', [Validators.required, this.isMatchPassword()])
  });
    
  constructor(private authService : AuthenticationService,
          private router: Router) { }

  ngOnInit() { }
  
  isMatchPassword() {
      return (c: FormControl) => {
          if (!c.parent || c.value === c.parent.value.password) {
              return null;
          }
          return {invalid: true};
      }
  }
  
  onSubmit() {
      if (this.authService.isLogged()) {
          this.router.navigate(['/']);
      } else {
          delete this.registerForm.value.confirmPassword;
          this.registerForm.value.role = 'user';
          this.registerForm.value.isBanned = false;
          this.authService.register(this.registerForm.value).subscribe();
          }
      }

}
