import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { CommentsService } from '../../../core/services/comments.service';

import { CommentModel } from '../../../core/models/comment';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  animations: [appAnimations]
})
export class CommentsComponent implements OnInit {
    hotelId : string;
    commentForm = new FormGroup({
        text: new FormControl('', [Validators.required])
    });
    comments : CommentModel[];
    constructor(private route : ActivatedRoute,
            private toastr : ToastrService,
            private commentsService : CommentsService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.hotelId = id;
            this.commentsService
                .getAllForHotel(id)
                .subscribe(data => {
                    this.comments = data;
                });
        });
    }
    
    onSubmit() {
        this.commentForm.value.userId = sessionStorage.getItem('id');
        this.commentForm.value.username = sessionStorage.getItem('username');
        this.commentForm.value.likeUsers = [];
        this.commentForm.value.hotelId = this.hotelId;
        
        this.commentsService
            .addComment(this.commentForm.value).subscribe(data => {
                this.comments.push(data);
                this.commentForm.controls.text.setValue('');
                this.toastr.success('Successfully add comment!');
            });
    }

}
