import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

import { AuthenticationService } from '../../../core/services/authentication.service';
import { UsersService } from '../../../core/services/users.service';

import { UserModel } from '../../../core/models/user';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.css'],
  animations: [appAnimations]
})
export class UsersAllComponent implements OnInit {
    users : UserModel[];
    constructor(private authService : AuthenticationService,
            private usersService : UsersService,
            private router: Router) { }

    ngOnInit() {
        if (this.authService.isAdmin()) {
            this.usersService.getAll()
            .subscribe(data => {
                this.users = data;
            });
        } else {
            this.router.navigate(['/']);
        }
    }
}
