import { Component, Input, OnInit } from '@angular/core';'@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FestsService } from '../../../core/services/fests.service';

import { HotelModel } from '../../../core/models/fest';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-profile-hotels',
  templateUrl: './profile-fests.component.html',
  styleUrls: ['./profile-fests.component.css'],
  animations: [appAnimations]
})
export class ProfileFestsComponent implements OnInit {
    @Input()userId : string;
    hotels : HotelModel[];
    isOwner : boolean;
    constructor(private hotelsService : FestsService,
            private route : ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            if (this.userId == sessionStorage.getItem('id')) {
                this.isOwner = true;
            } else {
                this.isOwner = false;
            }
            this.hotelsService.getAllByUserId(this.userId)
                .subscribe(data => {
                    this.hotels = data;
                });
        });
        
    }

}
