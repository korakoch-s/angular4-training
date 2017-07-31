import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-route-guard',
  templateUrl: './route-guard.component.html',
  styleUrls: ['./route-guard.component.scss']
})
export class RouteGuardComponent implements OnInit {

  public id: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    })
  }

  ngOnInit() {
  }

}
