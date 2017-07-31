import { Component, OnInit } from '@angular/core';
import { SecureService } from '../route-guard/secure.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  constructor(public secureService: SecureService) {
  }

  ngOnInit() {
  }

  secureClick() {
    this.secureService.isSecure = true;
  }

  unSecureClick() {
    this.secureService.isSecure = false;
  }
}
