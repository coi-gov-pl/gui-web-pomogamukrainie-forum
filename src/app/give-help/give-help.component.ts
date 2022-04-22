import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-give-help',
  templateUrl: './give-help.component.html',
  styleUrls: ['./give-help.component.scss'],
})
export class GiveHelpComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  corePath = CorePath;
}
