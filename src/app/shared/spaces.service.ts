import { Injectable } from '@angular/core';

import { Space } from './space.model';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class SpacesService {
  url: string = "http://spaceapi.fixme.ch/directory.json";

  constructor(private http: Http) { }

  getSpaces(): Observable<Space[]> {
    return this.http
      .get(this.url)
      .map((response) => { return this.initiateSpaces(response.json()); })
  }

  getSpace(url: string): Observable<any[]> {
    return this.http
      .get(url)
      .map((response) => { return response.json(); })
  }

  private initiateSpaces(spacePointers) {
    let spaces: Space[] = [];
    for(let name in spacePointers) {
      let url = spacePointers[name];
      let space = new Space(name, url, this);
      spaces.push(space);
    }
    return spaces;
  }
}
