import { Component } from '@angular/core';
import { HelpTypePath } from '../core/help-direction.enum';

@Component({
  selector: 'app-give-help',
  templateUrl: './give-help.component.html',
  styleUrls: ['./give-help.component.scss'],
})
export class GiveHelpComponent {
  helpType = HelpTypePath;
}
