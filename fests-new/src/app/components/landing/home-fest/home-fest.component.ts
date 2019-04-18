import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';

import { HotelModel } from '../../../core/models/fest';

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-fest.component.html',
  styleUrls: ['./home-fest.component.css']
})
export class HomeFestComponent implements OnInit {
  @Input() hotel : HotelModel;
  constructor(public authService : AuthenticationService) { }

  ngOnInit() {
  }

}
