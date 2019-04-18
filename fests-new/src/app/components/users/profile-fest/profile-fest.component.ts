import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';

import { HotelModel } from '../../../core/models/fest';

@Component({
  selector: 'app-profile-hotel',
  templateUrl: './profile-fest.component.html',
  styleUrls: ['./profile-fest.component.css']
})
export class ProfileFestComponent implements OnInit {
    @Input() hotel : HotelModel;
    canEdit : boolean;
    constructor(private authenticationService : AuthenticationService) { }
        
    ngOnInit() {
        this.canEdit = this.hotel['_acl']['creator'] == sessionStorage.getItem('id') 
        || this.authenticationService.isAdmin();
    }

}
