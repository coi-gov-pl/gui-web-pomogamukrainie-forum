import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesSearchComponent } from './cities-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CitiesSearchComponent],
  imports: [CommonModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, HttpClientModule],
  exports: [CitiesSearchComponent],
})
export class CitiesSearchModule {}
