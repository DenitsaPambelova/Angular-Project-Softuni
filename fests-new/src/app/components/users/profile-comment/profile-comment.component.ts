import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { CommentsService } from '../../../core/services/comments.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { CommentModel } from '../../../core/models/comment';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-profile-comment',
  templateUrl: './profile-comment.component.html',
  styleUrls: ['./profile-comment.component.css'],
  animations: [appAnimations]
})
export class ProfileCommentComponent implements OnInit {
  @Input() comment : CommentModel;
  activeEdit : boolean = false;
  canEdit : boolean;
  commentForm = new FormGroup({
      text: new FormControl('', [Validators.required])
  });
  constructor(private toastr : ToastrService,
          private commentsService : CommentsService,
          private authenticationService : AuthenticationService) { }

  ngOnInit() {
      this.canEdit = this.comment['_acl']['creator'] == sessionStorage.getItem('id')
      || this.authenticationService.isAdmin();
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
