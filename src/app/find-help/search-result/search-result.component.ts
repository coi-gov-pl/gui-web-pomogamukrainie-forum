import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {}

@NgModule({
  declarations: [SearchResultComponent],
  exports: [SearchResultComponent],
  imports: [MatCardModule],
})
export class SearchResultComponentModule {}
