import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../../core/services/authentication.service';
import { UsersService } from '../../../core/services/users.service';
import { ToastrService } from 'ngx-toastr';

import { UserModel } from '../../../core/models/user';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  animations: [appAnimations]
})
export class UserEditComponent implements OnInit {
    user : UserModel;
    userId : string;
    isAdmin : boolean;
    userForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z]+@[a-z]+\.[a-z]+$/)]),
        isBanned: new FormControl('', [Validators.required])
    });
    
    constructor(private toastr : ToastrService,
            private authService : AuthenticationService,
            private usersService : UsersService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.userId = params['id'];
          this.isAdmin = this.authService.isAdmin();
          if (this.isAdmin || this.userId == sessionStorage.getItem("id")) {
              this.usersService.getById(this.userId)
              .subscribe(data => {
                  this.user = data;
                  this.userForm.controls.email.setValue(data.email);
                  this.userForm.controls.isBanned.setValue(data.isBanned);
              });
          } else {
              this.router.navigate(['/']);
          }
      });
  }

  onSubmit() {
      this.user.email = this.userForm.value.email;
      if (this.userForm.value.isBanned == 'true') {
          this.user.isBanned = true;
      } else {
          this.user.isBanned = Boolean(false);
      }
      this.usersService
          .edit(this.user)
          .subscribe(data => {
              this.router.navigate([`/users/profile/${this.userId}`]);
              this.toastr.success('Successfully edit ' + this.user.username + '!');
          });
  }
}
