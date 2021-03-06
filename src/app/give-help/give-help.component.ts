import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CorePath } from '@app/shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-help',
  templateUrl: './give-help.component.html',
  styleUrls: ['./give-help.component.scss'],
})
export class GiveHelpComponent implements OnInit {
  corePath = CorePath;
  editMode = false;

  constructor(private viewportScroller: ViewportScroller, private router: Router) {}

  ngOnInit() {
    this.editMode = this.router.url?.includes(CorePath.Edit);
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
