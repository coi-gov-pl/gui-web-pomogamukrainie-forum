import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnDestroy {
  @Input()
  date: string | undefined;
  @Input() required = false;

  @Output()
  dateChange = new EventEmitter<string>();

  dateModel: Date | undefined;

  langChangeSub: Subscription;

  constructor(private translate: TranslateService, private dateAdapter: DateAdapter<Date>) {
    const currentLang = translate.currentLang ?? translate.getBrowserCultureLang();
    this.setLocale(currentLang.split('_')[0]);
    this.langChangeSub = translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setLocale(event.lang.split('_')[0]);
    });
  }

  setLocale(locale: string) {
    this.dateAdapter.setLocale(locale);
  }

  onDatePickerChange(ev: any) {
    debugger;
    const newValue: Moment = ev.value;
    if (newValue?.isValid()) {
      this.dateModel = newValue?.toDate();
      this.dateChange.emit(newValue?.format('YYYY-MM-DD'));
    } else {
      this.dateChange.emit(undefined);
    }
  }

  ngOnDestroy() {
    this.langChangeSub.unsubscribe();
  }
}
