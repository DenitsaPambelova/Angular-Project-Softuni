import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public authService : AuthenticationService, 
          private router: Router) { }
  
  ngOnInit() { 
  }
  
  logout() {
      if (!this.authService.isLogged()) {
          this.router.navigate(['/auth/login']);
      } else {
          this.authService
              .logout()
              .subscribe(data => {
                  sessionStorage.removeItem('id');
                  sessionStorage.removeItem('username');
                  sessionStorage.removeItem('authtoken');
                  sessionStorage.removeItem('role');
                  sessionStorage.removeItem('email');
                  this.router.navigate(['/blue-screen']);
                  //this.router.navigate(['/auth/login']);
              },
              error => {
              });
      }
  }

}
