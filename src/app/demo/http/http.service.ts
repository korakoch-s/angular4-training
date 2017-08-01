import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor( @Inject('apiUrl') public apiUrl: string, private http: Http) { }

  loadData() {
    return this.http.request(this.apiUrl)
      .map(resp => resp.json());
  }

  makePost(title: string, body: string) {
    return this.http.post(
      this.apiUrl,
      JSON.stringify({
        body: body,
        title: title,
        userId: 1
      }))
      .map(resp => resp.json());
  }
}
