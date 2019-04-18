import { Component, Input, OnInit } from '@angular/core';'@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentsService } from '../../../core/services/comments.service';

import { CommentModel } from '../../../core/models/comment';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-profile-comments',
  templateUrl: './profile-comments.component.html',
  styleUrls: ['./profile-comments.component.css'],
  animations: [appAnimations]
})
export class ProfileCommentsComponent implements OnInit {
    @Input()userId : string;
    comments : CommentModel[];
    isOwner : boolean;
    constructor(private commentsService : CommentsService,
            private route : ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            if (this.userId == sessionStorage.getItem('id')) {
                this.isOwner = true;
            } else {
                this.isOwner = false;
            }
            this.commentsService.getAllByUserId(this.userId)
                .subscribe(data => {
                    this.comments = data;
                });
        });
        
    }

}
