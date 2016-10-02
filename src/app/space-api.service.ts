import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class SpaceAPIService {

  constructor(private http: Http) { }

  public getSpaces() {
    return this.http
      .get(`http://spaceapi.fixme.ch/directory.json`)
      .map(this.extractSpaces);
    // return ['Basel', 'Zürich', 'Bern'];
  }

  private extractSpaces(data) {
    let spaces = data;
    data.foreach()
  }

}
