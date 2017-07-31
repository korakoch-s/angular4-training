import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('th-TH');
  }

  ngOnInit() {
    this.translate.get('hello', { value: 'กรกช' }).subscribe(value => {
      console.log(value); // สวัสดี กรกช
    });
  }

  enClick() {
    this.translate.setDefaultLang('en-US');
  }

  thClick() {
    this.translate.setDefaultLang('th-TH');
  }

}
