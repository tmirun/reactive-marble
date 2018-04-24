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
  public searchOptions = [];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentCategory = params.category;
      this.currentOperator = params.operator;
    });

    Object.keys(operators).forEach((categoryKey) => {
      Object.keys(operators[categoryKey]).forEach((operator) => {
        this.searchOptions.push({
          label: `${this.capitalizeFirstLetter(categoryKey)}: ${this.capitalizeFirstLetter(operator)}`,
          value: {
            category: categoryKey,
            operator: operator
          }
        });
      });
    });
  }

  capitalizeFirstLetter(string = '') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
