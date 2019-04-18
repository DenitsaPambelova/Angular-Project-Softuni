import { Component, Input, OnInit } from '@angular/core';

import { HotelModel } from '../../../core/models/fest';

@Component({
  selector: 'app-hotel',
  templateUrl: './fest.component.html',
  styleUrls: ['./fest.component.css']
})
export class FestComponent implements OnInit {
  @Input() hotel : HotelModel;
  constructor() { }

  ngOnInit() {
  }

}
