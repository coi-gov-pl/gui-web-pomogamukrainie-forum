import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesSearchComponent } from './cities-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { DisplayLocationOptionPipe } from './display-location-option';

@NgModule({
  declarations: [CitiesSearchComponent, DisplayLocationOptionPipe],
  imports: [CommonModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule],
  exports: [CitiesSearchComponent],
})
export class CitiesSearchModule {}
