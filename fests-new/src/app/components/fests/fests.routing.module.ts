import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FestsComponent } from './fests/fests.component';
import { FestAddComponent } from './fest-add/fest-add.component';
import { FestEditComponent } from './fest-edit/fest-edit.component';
import { FestDeleteComponent } from './fest-delete/fest-delete.component';
import { FestReviewComponent } from './fest-review/fest-review.component';

import { AuthGuard } from '../../core/guards/auth/auth.guard';  

const routes : Routes = [
       {path: '', component: FestsComponent},
       {path: 'review/:id', canActivate: [AuthGuard], component: FestReviewComponent},
       {path: 'edit/:id', canActivate: [AuthGuard], component: FestEditComponent},
       {path: 'delete/:id', canActivate: [AuthGuard], component: FestDeleteComponent},
       {path: 'add', canActivate: [AuthGuard], component: FestAddComponent}
   ];

@NgModule({
        exports: [ RouterModule ],
        imports: [ RouterModule.forChild(routes) ]
})
export class FestsRoutingModule { }
