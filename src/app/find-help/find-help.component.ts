import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-find-get-help',
  templateUrl: './find-help.component.html',
  styleUrls: ['./find-help.component.scss'],
})
export class FindHelpComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  corePath = CorePath;
}
