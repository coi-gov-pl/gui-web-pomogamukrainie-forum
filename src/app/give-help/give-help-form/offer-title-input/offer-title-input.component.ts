import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

/** The component is expected to be used inside <form>. */
@Component({
  selector: 'app-offer-title-input',
  templateUrl: './offer-title-input.component.html',
  styleUrls: ['./offer-title-input.component.scss'],
  // Needed to attach the input to the parent form.
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class OfferTitleInputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
}
