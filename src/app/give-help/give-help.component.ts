import { Component } from '@angular/core';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-give-help',
  templateUrl: './give-help.component.html',
  styleUrls: ['./give-help.component.scss'],
})
export class GiveHelpComponent {
  corePath = CorePath;
}
