import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { operators } from '../../data';

@Component({
  selector: 'rm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public marble = [];
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.marble = [];
      if (operators[params.category]) {
        if (operators[params.category][params.operator]) {
          this.marble = operators[params.category][params.operator];
        }
      }
    });
  }

}
