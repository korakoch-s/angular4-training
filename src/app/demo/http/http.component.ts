import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  public datas: Object;
  public data: Object;
  public loading = false;
  private apiUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  loadData() {
    this.loading = true;
    this.data = null;
    this.datas = null;
    this.http.request(this.apiUrl)
      .subscribe((res: Response) => {
        this.datas = res.json();
        this.loading = false;
      }, err => {
        console.log('Error: ' + err);
        this.loading = false;
      });
  }

  makePost(): void {
    this.loading = true;
    this.data = null;
    this.datas = null;
    this.http.post(
      this.apiUrl,
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}
