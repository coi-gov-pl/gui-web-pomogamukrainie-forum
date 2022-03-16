import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  @Input()
  date: string | undefined;
  @Input() required = false;

  @Output()
  dateChange = new EventEmitter<string>();

  dateModel: Date | undefined;

  onDatePickerChange(newValue: Date) {
    this.dateModel = newValue;

    // See https://stackoverflow.com/a/34290167/369687
    this.date = [
      newValue.getFullYear(),
      ('0' + (newValue.getMonth() + 1)).slice(-2),
      ('0' + newValue.getDate()).slice(-2),
    ].join('-');

    this.dateChange.emit(this.date);
  }
}
