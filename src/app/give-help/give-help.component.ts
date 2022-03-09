import { Component } from '@angular/core';
import { HelpTypePath } from '@app/shared/models';

@Component({
  selector: 'app-give-help',
  templateUrl: './give-help.component.html',
  styleUrls: ['./give-help.component.scss'],
})
export class GiveHelpComponent {
  helpType = HelpTypePath;
}
