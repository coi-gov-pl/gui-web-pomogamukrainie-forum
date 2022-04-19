import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent implements OnChanges {
  @Input() text!: string;
  @Input() maxLength: number = 760;
  currentText!: string;

  public isCollapsed: boolean = true;

  toggleVisibility() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }

  determineView() {
    if (this.text?.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      return;
    }
    this.currentText = this.isCollapsed ? this.text.substring(0, this.maxLength).concat('...') : this.text;
  }

  ngOnChanges() {
    this.determineView();
  }
}
