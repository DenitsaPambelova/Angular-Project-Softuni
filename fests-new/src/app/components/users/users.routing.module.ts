import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersAllComponent } from './users-all/users-all.component';

import { AuthGuard } from '../../core/guards/auth/auth.guard';  

const routes : Routes = [
       {path: 'profile/:id', canActivate: [AuthGuard], component: ProfileComponent},
       {path: 'edit/:id', canActivate: [AuthGuard], component: UserEditComponent},
       {path: 'all', canActivate: [AuthGuard], component: UsersAllComponent}
   ];

@NgModule({
        exports: [ RouterModule ],
        imports: [ RouterModule.forChild(routes) ]
})
export class UsersRoutingModule { }
