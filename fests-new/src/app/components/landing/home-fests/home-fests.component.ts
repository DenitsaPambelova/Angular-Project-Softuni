import { Component, OnInit } from '@angular/core';

import { FestsService } from '../../../core/services/fests.service';

import { HotelModel } from '../../../core/models/fest';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-home-hotels',
  templateUrl: './home-fests.component.html',
  styleUrls: ['./home-fests.component.css'],
  animations: [appAnimations]
})
export class HomeFestsComponent implements OnInit {
    hotels : HotelModel[];
    constructor(private hotelsService : FestsService) { }

    ngOnInit() {
        this.hotelsService
            .getTopThree()
            .subscribe(data => {
                this.hotels = data;
            });
    }
}
