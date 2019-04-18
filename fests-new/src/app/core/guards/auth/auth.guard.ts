import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Router} from "@angular/router";

import { AuthenticationService } from '../../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
  constructor(private authService : AuthenticationService,
            private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.isAuthenticated();
  }
  
  isAuthenticated() {
    if (this.authService.isLogged()) {
        return true;
    } else {
    	this.router.navigate(['/auth/login']);
    	return false;
    }
  }
}
