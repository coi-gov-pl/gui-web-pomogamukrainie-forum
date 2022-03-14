import { Component } from '@angular/core';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-find-get-help',
  templateUrl: './find-help.component.html',
  styleUrls: ['./find-help.component.scss'],
})
export class FindHelpComponent {
  corePath = CorePath;
}
