import { Component, OnInit } from '@angular/core';
import { operators } from '../../data';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'rm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public objectKeys = Object.keys;
  public list = operators;
  public currentCategory = '';
  public currentOperator = '';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentCategory = params.category;
      this.currentOperator = params.operator;
      //   // this.param = params['yourParam'];
      //   // this.initialiseState(); // reset and set based on new parameter this time
    });
  }

}
