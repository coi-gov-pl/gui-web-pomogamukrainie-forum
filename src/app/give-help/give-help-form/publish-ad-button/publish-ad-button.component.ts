import { Component, Host } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publish-ad-button',
  templateUrl: './publish-ad-button.component.html',
  styleUrls: ['./publish-ad-button.component.scss'],
})
export class PublishAdButtonComponent {
  constructor(@Host() readonly form: NgForm) {}
}
