import { Component, OnInit } from '@angular/core';
import { Space, SpacesService } from '../shared';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Component({
  selector: 'sps-spaces-list',
  templateUrl: './spaces-list.component.html',
  styleUrls: ['./spaces-list.component.css']
})
export class SpacesListComponent implements OnInit {
  spaces: Space[];

  constructor(private spacesService: SpacesService) { }

  ngOnInit() {
    this.spacesService.getSpaces()
      .subscribe(spaces => this.spaces = spaces);
  }

}
