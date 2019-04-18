import { Component, OnInit } from '@angular/core';
import { appAnimations } from '../../../app.animations';

import { FestsService } from '../../../core/services/fests.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { HotelModel } from '../../../core/models/fest';

@Component({
  selector: 'app-hotels',
  templateUrl: './fests.component.html',
  styleUrls: ['./fests.component.css'],
  animations: [appAnimations]
})
export class FestsComponent implements OnInit {
  hotels : HotelModel[];
  selectedFieldName : string;
  userId : string;
  constructor(private hotelsService : FestsService,
          public authService : AuthenticationService,) { }

  ngOnInit() {
      this.hotelsService
          .getAll()
          .subscribe(data => {
              this.hotels = data;
              this.orderByRaiting();
              this.selectedFieldName = 'raiting';
              this.userId = sessionStorage.getItem('id');
          });
  }
  
  change(event){
      if (event.target.value != this.selectedFieldName) {
          this.selectedFieldName = event.target.value;
          switch (this.selectedFieldName) {
        	case 'name':
        	    this.orderByName();
        		break;
        	case 'raiting':
        	    this.orderByRaiting();
                break;
            case 'hotest':
                this.orderByHotest();  
                break;
        	default:
        	    this.orderByRaiting();
        		break;
          }
      }
  }
  
  orderByName() {
      this.hotels = this.hotels.sort((a, b) => {
          return a.name.localeCompare(b.name); 
       });
  }
  
  orderByRaiting() {
      this.hotels = this.hotels.sort((a, b) => {
          return b.raiting - a.raiting;
       });
  }
  
  orderByHotest() {
      this.hotels = this.hotels.sort((a, b) => {
          return b._kmd.ect.localeCompare(a._kmd.ect); 
       });
  }

}
