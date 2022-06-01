import { Component, EventEmitter, Inject, Output, OnInit, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BLUR_CSS_CLASS, PAGE_LAYOUT_SELECTOR } from '@app/shared/consts';
import { DialogData } from '@app/shared/models';

@Component({
  selector: 'app-confirm-session-expired',
  templateUrl: './confirm-session-expired.component.html',
  styleUrls: ['./confirm-session-expired.component.scss'],
})
export class ConfirmSessionExpiredComponent implements OnInit {
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  element: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private renderer: Renderer2) {}

  ngOnInit() {
    this.element = this.renderer.selectRootElement(PAGE_LAYOUT_SELECTOR, true);
    this.renderer.addClass(this.element, BLUR_CSS_CLASS);
  }

  confirmAction(confirmed: boolean) {
    this.renderer.removeClass(this.element, BLUR_CSS_CLASS);
    this.confirm.emit(confirmed);
  }
}
