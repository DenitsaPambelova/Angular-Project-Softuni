import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../../core/services/authentication.service';
import { UsersService } from '../../../core/services/users.service';

import { UserModel } from '../../../core/models/user';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [appAnimations]
})
export class ProfileComponent implements OnInit {
    user : UserModel;
    canEdit : boolean;
    isAdmin : boolean;

    constructor(private authenticationService : AuthenticationService,
            private usersService : UsersService,
            private route : ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.usersService.getById(id).subscribe(data => {
                this.user = data;
                this.canEdit = id == sessionStorage.getItem('id') 
                    || this.authenticationService.isAdmin();
                this.isAdmin = this.authenticationService.isAdmin();
            })
        });
    }

}
