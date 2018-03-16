import { Component, OnInit } from '@angular/core';
import { operators } from '../../data';


@Component({
  selector: 'rm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public objectKeys = Object.keys;
  public list = operators;
  constructor() { }

  ngOnInit() {

  }

}
