import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

enum MaterialSupportType {
  Equipment = 'equipment',
  Food = 'food'
}

const materialSupportTypes: MaterialSupportType[] = Object.values(MaterialSupportType);

export interface MaterialSupport {
  type?: MaterialSupportType;
  location?: string;
}

@Component({
  selector: 'app-material-support-form',
  templateUrl: './material-support-form.component.html',
  styleUrls: ['./material-support-form.component.scss']
})
export class MaterialSupportFormComponent {
  formData: MaterialSupport = {
    type: undefined,
    location: '',
  }
  materialSupportTypes = materialSupportTypes;

  handleSubmit($event: any) {
    $event.preventDefault();
    console.log('Submitted!')
  }
}

@NgModule({
  declarations: [MaterialSupportFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [MaterialSupportFormComponent]
})

export class MaterialSupportFormModule { }
