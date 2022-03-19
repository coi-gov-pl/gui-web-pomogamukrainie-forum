import { Component, NgModule, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-more-info-link',
  templateUrl: './more-info-link.component.html',
  styleUrls: ['./more-info-link.component.scss'],
})
export class MoreInfoLinkComponent {
  corePath = CorePath;

  @Input() statementAnchor = '';
}

@NgModule({
  declarations: [MoreInfoLinkComponent],
  imports: [MatIconModule, RouterModule, TranslateModule],
  exports: [MoreInfoLinkComponent],
})
export class MoreInfoLinkModule {}
