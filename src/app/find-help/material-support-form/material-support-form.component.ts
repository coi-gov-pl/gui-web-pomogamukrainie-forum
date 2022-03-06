import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MoreInfoLinkModule } from '../../core/components/more-info-link/more-info-link.component';
import { TranslateModule } from '@ngx-translate/core';
import { CitiesSearchModule } from 'src/app/cities-search/cities-search.module';

enum MaterialSupportType {
  Food = 'food',
  Clothing = 'clothing',
  Hygiene = 'hygiene',
  Misc = 'misc',
}

const materialSupportTypes = Object.values(MaterialSupportType);

@Component({
  selector: 'app-material-support-form',
  templateUrl: './material-support-form.component.html',
  styleUrls: ['./material-support-form.component.scss'],
})
export class MaterialSupportFormComponent {
  materialSupportTypes = materialSupportTypes;

  data = {
    type: undefined,
    location: undefined,
  };

  handleSubmit($event: any) {
    $event.preventDefault();
    console.log(this.data);
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
    TranslateModule,
    CitiesSearchModule,
  ],
  exports: [MaterialSupportFormComponent],
})
export class MaterialSupportFormModule {}
