import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';
import { FestsService } from '../../../core/services/fests.service';

import { HomeFestsComponent } from '../home-fests/home-fests.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    constructor(private authService : AuthenticationService,
            private hotelService : FestsService) { }
    
    ngOnInit() {
        this.authService.getBasicToken().subscribe();
    }

}
