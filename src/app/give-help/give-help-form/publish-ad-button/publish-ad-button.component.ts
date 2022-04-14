import { Component, Host, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publish-ad-button',
  templateUrl: './publish-ad-button.component.html',
  styleUrls: ['./publish-ad-button.component.scss'],
})
export class PublishAdButtonComponent {
  @Input() isEditRoute: boolean = false;
  constructor(@Host() readonly form: NgForm) {}
}
