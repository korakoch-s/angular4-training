import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
  providers: [
    { provide: 'apiUrl', useValue: 'http://jsonplaceholder.typicode.com/posts' },
    { provide: HttpService, useClass: HttpService }
  ]
})
export class HttpComponent implements OnInit {
  public datas: Object;
  public data: Object;
  public loading = false;

  constructor(private httpSvr: HttpService) { }

  ngOnInit() {
  }

  loadData() {
    this.loading = true;
    this.data = null;
    this.datas = null;
    this.httpSvr.loadData()
      .subscribe((res: Response) => {
        this.datas = res;
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
    this.httpSvr.makePost('foo', 'bar')
      .subscribe((res: Response) => {
        this.data = res;
        this.loading = false;
      });
  }
}
