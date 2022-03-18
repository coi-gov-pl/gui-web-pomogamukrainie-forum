import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, NgModule, Output } from '@angular/core';
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
export class TypeOfHelpComponent {
  /**
   * Material icon name.
   */
  @Input() icon!: string;

  /**
   * Component name to display. Uses translate pipe to display in template.
   */
  @Input() name!: string;

  /**
   * Whether component is selected.
   */
  @Input() @HostBinding('class.selected') selected?: boolean;

  /**
   * Whether component should be disabled. Disabled component does not emit click event or redirect to `path`.
   */
  @Input() @HostBinding('class.disabled') disabled?: boolean;

  /**
   * Emitter for element click. Emits selection status.
   * true - selected
   * false - not selected
   */
  @Output() cardClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}

@NgModule({
  declarations: [TypeOfHelpComponent],
  imports: [CommonModule, MatIconModule, MatCardModule, TranslateModule],
  exports: [TypeOfHelpComponent],
})
export class TypeOfHelpComponentModule {}
