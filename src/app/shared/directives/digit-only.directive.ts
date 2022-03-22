import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDigitOnly]',
})
export class DigitOnlyDirective {
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]+/g, '');
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
