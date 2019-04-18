import { Component, OnInit } from '@angular/core';

import { CommentsService } from '../../../core/services/comments.service';

import { CommentModel } from '../../../core/models/comment';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-home-comments',
  templateUrl: './home-comments.component.html',
  styleUrls: ['./home-comments.component.css'],
  animations: [appAnimations]
})
export class HomeCommentsComponent implements OnInit {
  comments : CommentModel[];

  constructor(private commentsService : CommentsService) { }

  ngOnInit() {
      this.commentsService
      .getLastThree()
      .subscribe(data => {
          this.comments = data;
      });
  }

}
