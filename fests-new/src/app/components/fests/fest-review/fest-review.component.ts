import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { appAnimations } from '../../../app.animations';

import { ToastrService } from 'ngx-toastr';
import { FestsService } from '../../../core/services/fests.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { CommentsComponent } from '../../comments/comments/comments.component';

import { HotelModel } from '../../../core/models/fest';

@Component({
  selector: 'app-hotel-review',
  templateUrl: './fest-review.component.html',
  styleUrls: ['./fest-review.component.css'],
  animations: [appAnimations]
})
export class FestReviewComponent implements OnInit {
    canVote: boolean;
    canEdit: boolean;
    hotel: HotelModel;
    voteForm = new FormGroup({
        raiting: new FormControl('', [Validators.required])
    });
    constructor(private route: ActivatedRoute,
            private toastr: ToastrService,
            private hotelsService: FestsService,
            private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.hotelsService
                .getById(id)
                .subscribe(data => {
                    const userId = sessionStorage.getItem('id');
                    this.hotel = data;
                    this.canVote = !this.hotel.voteUsers.includes(userId);
                    this.canEdit = data['_acl']['creator'] == userId
                        || this.authenticationService.isAdmin();
                });
        });
    }

    vote() {
        if (this.canVote) {
        const userId = sessionStorage.getItem('id');
            const currentRaiting = Number(this.hotel.raiting);
            this.hotel.voteUsers.push(userId);
            this.hotel.raiting = (currentRaiting + Number(this.voteForm.value.raiting)) / (this.hotel.voteUsers.length == 1 ? 1 : 2);
            this.canVote = !this.canVote;
            this.hotelsService.edit(this.hotel).subscribe(data => {
                this.toastr.success('Successfully vote for ' + this.hotel.name + '!');
            });
        }
    }

}
