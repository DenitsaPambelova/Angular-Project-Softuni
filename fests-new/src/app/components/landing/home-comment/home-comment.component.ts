import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';

import { CommentModel } from '../../../core/models/comment';

@Component({
  selector: 'app-home-comment',
  templateUrl: './home-comment.component.html',
  styleUrls: ['./home-comment.component.css']
})
export class HomeCommentComponent implements OnInit {
  @Input() comment : CommentModel;
  constructor(public authService : AuthenticationService) { }

  ngOnInit() {
  }

}
