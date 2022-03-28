import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

/** The component is expected to be used inside <form>. */
@Component({
  selector: 'app-offer-description-input',
  templateUrl: './offer-description-input.component.html',
  styleUrls: ['./offer-description-input.component.scss'],
  // Needed to attach the input to the parent form.
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class OfferDescriptionInputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
}
