import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FestsModule } from './components/fests/fests.module';
import { AuthenticationModule } from '../app/components/authentication/authentication.module';

import { AuthGuard } from './core/guards/auth/auth.guard';
import { HomeFestsComponent} from './components/landing/home-fests/home-fests.component';

import { HomeComponent } from './components/landing/home/home.component';

import { BlockedComponent } from './components/landing/blocked/blocked.component';
import { NotFoundComponent } from './components/landing/not-found/not-found.component';
// other imports...

const routes: Routes = [
       {path: '', component: HomeComponent },
       {path: 'blocked', component: BlockedComponent },
       {path: 'auth', loadChildren: '../app/components/authentication/authentication.module#AuthenticationModule'},
       {path: 'fests', loadChildren: '../app/components/fests/fests.module#FestsModule'},
       {path: 'users', loadChildren: '../app/components/users/users.module#UsersModule'},
       {path: '**', component: HomeFestsComponent },
   ];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRouting { }
