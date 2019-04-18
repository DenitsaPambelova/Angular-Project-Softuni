import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

import { ToastrService } from 'ngx-toastr';
import { FestsService } from '../../../core/services/fests.service';

import { HotelModel } from '../../../core/models/fest';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './fest-edit.component.html',
  styleUrls: ['./fest-edit.component.css'],
  animations: [appAnimations]
})
export class FestEditComponent implements OnInit {
    hotel : HotelModel;
    hotelForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
        imageUrl: new FormControl(''),
        hotelUrl: new FormControl('')
    });
      
    constructor(private hotelsService : FestsService,
            private toastr : ToastrService,
            private route : ActivatedRoute,
            private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.hotelsService.getById(id)
                .subscribe(data => {
                    this.hotel = data;
                    this.hotelForm.controls.city.setValue(this.hotel.city);
                    this.hotelForm.controls.description.setValue(this.hotel.description);
                    this.hotelForm.controls.name.setValue(this.hotel.name);
                    this.hotelForm.controls.imageUrl.setValue(this.hotel.imageUrl);
                    this.hotelForm.controls.hotelUrl.setValue(this.hotel.hotelUrl);
                })
        });
    }
    
    onSubmit() {
        this.hotel.city = this.hotelForm.value.city;
        this.hotel.description = this.hotelForm.value.description;
        this.hotel.name = this.hotelForm.value.name;
        this.hotel.imageUrl = this.hotelForm.value.imageUrl;
        this.hotel.hotelUrl = this.hotelForm.value.hotelUrl;
        this.hotelsService.edit(this.hotel).subscribe(data => {
            this.router.navigate([`/fests/review/${this.hotel._id}`]);
            this.toastr.success('Successfully edit ' +  this.hotel.name + '!');
        });
    }

}
