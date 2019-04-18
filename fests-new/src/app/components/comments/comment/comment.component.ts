import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { CommentsService } from '../../../core/services/comments.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { CommentModel } from '../../../core/models/comment';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  animations: [appAnimations]
})
export class CommentComponent implements OnInit {
  @Input() comment : CommentModel;
  canLike : boolean;
  canEdit : boolean;
  activeEdit : boolean = false;
  userId: string;
  commentForm = new FormGroup({
      text: new FormControl('', [Validators.required])
  });
  constructor(private toastr : ToastrService,
          private commentsService : CommentsService,
          private authenticationService : AuthenticationService) { }

  ngOnInit() {
      this.userId = sessionStorage.getItem('id');
      if(this.comment.userId != this.userId && !this.comment.likeUsers.includes(this.userId)){
          this.canLike = true;
      } else {
          this.canLike = false;
      }
      if(this.comment.userId == this.userId || this.authenticationService.isAdmin()){
          this.canEdit = true;
      } else {
          this.canEdit = false;
      }
  }
  
  like() {
      this.comment.likeUsers.push(sessionStorage.getItem('id'));
      this.commentsService.edit(this.comment).subscribe(data => {
          this.canLike = !this.canLike;
          this.toastr.success('Successfully like comment!');
      });
  }
  
  delete() {
      this.activeEdit = false;
      this.commentsService.delete(this.comment._id).subscribe(data => {
          this.toastr.success('Successfully delete comment!');
          this.comment = undefined;
      });
  }
  
  edit() {
      this.activeEdit = true;
      this.commentForm.controls.text.setValue(this.comment.text);
  }
  
  cancel() {
      this.activeEdit = false;
  }
  
  onSubmit() {
      this.comment.text = this.commentForm.value.text;
      this.commentsService.edit(this.comment).subscribe(data => {
          this.commentForm.controls.text.setValue('');
          this.toastr.success('Successfully edit comment!');
          this.activeEdit = false;
      });
  }

}
