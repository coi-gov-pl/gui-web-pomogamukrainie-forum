import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-attribute',
  templateUrl: './search-result-attribute.component.html',
  styleUrls: ['./search-result-attribute.component.scss'],
})
export class SearchResultAttributeComponent {
  @Input()
  text?: string;
  @Input()
  icon?: string;
}
