import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'w-wall-icons',
  templateUrl: 'wall-icons.html'
})

export class WallIconsComponent implements OnInit {

  @Input() items: any = [];

  constructor() {
  }

  ngOnInit() {
  }
}
