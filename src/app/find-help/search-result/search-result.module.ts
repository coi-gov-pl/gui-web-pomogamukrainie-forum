import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SearchResultComponent } from './search-result.component';
import { SearchResultAttributeComponent } from './search-result-attribute/search-result-attribute.component';

@NgModule({
  declarations: [SearchResultComponent, SearchResultAttributeComponent],
  exports: [SearchResultComponent, SearchResultAttributeComponent],
  imports: [MatCardModule, CommonModule, MatIconModule],
})
export class SearchResultComponentModule {}
