import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MoreInfoLinkModule } from '../../core/components/more-info-link/more-info-link.component';

interface SelectOption<T> {
  label: string;
  value: T;
}

enum MaterialSupportType {
  Food = 'food',
  Clothing = 'clothing',
  Hygiene = 'hygiene',
  Other = 'other',
}

const materialSupportTypes: SelectOption<MaterialSupportType>[] = [
  { label: 'Food', value: MaterialSupportType.Food },
  { label: 'Clothing', value: MaterialSupportType.Clothing },
  {
    label: 'Hygiene and cleaning products',
    value: MaterialSupportType.Hygiene,
  },
  { label: 'Other', value: MaterialSupportType.Other },
];

@Component({
  selector: 'app-material-support-form',
  templateUrl: './material-support-form.component.html',
  styleUrls: ['./material-support-form.component.scss'],
})
export class MaterialSupportFormComponent {
  form: FormGroup = new FormGroup({
    type: new FormControl(undefined),
    location: new FormControl(''),
  });
  materialSupportTypes = materialSupportTypes;

  handleSubmit($event: any) {
    $event.preventDefault();
    console.log('Submitted!');
  }
}

@NgModule({
  declarations: [MaterialSupportFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MoreInfoLinkModule,
  ],
  exports: [MaterialSupportFormComponent],
})
export class MaterialSupportFormModule {}
