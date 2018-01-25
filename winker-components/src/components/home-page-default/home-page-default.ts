import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'w-home-page-default',
  templateUrl: 'home-page-default.html'
})
export class HomePageDefaultComponent implements OnInit {

  @Input() pages = [];


  constructor() {
  }

  ngOnInit() {
  }

}
