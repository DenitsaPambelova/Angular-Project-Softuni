import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UsersService } from '../../../core/services/users.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { UserModel } from '../../../core/models/user';

@Component({
  selector: 'app-user-short',
  templateUrl: './user-short.component.html',
  styleUrls: ['./user-short.component.css']
})
export class UserShortComponent implements OnInit {
  @Input() user : UserModel;
  isAdmin : boolean;
  constructor(private usersService : UsersService,
          private authenticationService : AuthenticationService,
          private router: Router) { }

  ngOnInit() {
      this.isAdmin = this.authenticationService.isAdmin();
      if(!this.isAdmin){
          this.router.navigate(['/']);
      }
  }

}
