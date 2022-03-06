import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  NgModule,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

enum Visibility {
  HIDDEN = 'hidden',
  VISIBLE = 'visible',
}

@Component({
  selector: 'app-type-of-help[icon][name]',
  templateUrl: './type-of-help.component.html',
  styleUrls: ['./type-of-help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeOfHelpComponent implements OnChanges {
  /**
   * Material icon name.
   */
  @Input() icon!: string;

  /**
   * Component name to display. Uses translate pipe to display in template.
   */
  @Input() name!: string;

  /**
   * Path to redirect after click (relative to activated route). `RedirectOnClick` should be set to true to enable redirect.
   * Path is represented as angular navigate commands (an array of URL fragments).
   */
  @Input() path?: any[];

  /**
   * Whether click should redirect to `path`.
   */
  @Input() redirectOnClick?: boolean;

  /**
   * Whether click should toggle selection status.
   */
  @Input() enableToggle?: boolean;

  /**
   * Whether component is selected.
   */
  @Input() @HostBinding('class.selected') selected?: boolean;

  /**
   * Whether component should unfold top and bottom after being selected.
   */
  @Input() @HostBinding('class.unfold-on-select') unfoldOnSelect?: boolean;

  /**
   * Whether component should be disabled. Disabled component does not emit click event or redirect to `path`.
   */
  @Input() @HostBinding('class.disabled') disabled?: boolean;

  /**
   * Whether component should display border on hover.
   */
  @Input() @HostBinding('class.border-on-hover') borderOnHover?: boolean;

  /**
   * Emitter for element click. Emits selection status.
   * true - selected
   * false - not selected
   */
  @Output() cardClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Visibility of top and bottom unfolding elements.
   */
  topBottomVisibility: string = Visibility.HIDDEN;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.checkTopBottomVisibility();
  }

  /**
   * Handle click.
   */
  handleClick() {
    if (!this.disabled) {
      if (this.redirectOnClick) {
        this.redirect();
      } else {
        if (this.enableToggle || (!this.enableToggle && !this.selected)) {
          this.toggleSelection();
          this.checkTopBottomVisibility();
        }
        this.emitSelectionStatus();
      }
    }
  }

  /**
   * Emits card clicked event with `selected` status.
   * @private
   */
  private emitSelectionStatus() {
    this.cardClicked.emit(this.selected);
  }

  /**
   * Redirects to `path` if value of `path` is not empty.
   * @private
   */
  private redirect() {
    if (this.path) {
      this.router.navigate(this.path || [], { relativeTo: this.activatedRoute });
    }
  }

  /**
   * Checks visibility of top and bottom unfolding part of component.
   * @private
   */
  private checkTopBottomVisibility() {
    this.topBottomVisibility =
      !this.disabled && this.selected && this.unfoldOnSelect ? Visibility.VISIBLE : Visibility.HIDDEN;
  }

  /**
   * Toggle selection.
   * @private
   */
  private toggleSelection() {
    this.selected = !this.selected;
  }
}

@NgModule({
  declarations: [TypeOfHelpComponent],
  imports: [CommonModule, MatIconModule, MatCardModule, TranslateModule],
  exports: [TypeOfHelpComponent],
})
export class TypeOfHelpComponentModule {}
