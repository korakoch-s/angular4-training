import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent implements OnInit {
  public members: Member[];

  constructor() {
    this.members = Member.GetMockData();
  }

  ngOnInit() {
  }

}
