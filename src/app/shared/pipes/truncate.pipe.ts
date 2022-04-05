import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, trail = ''): string {
    const limited = value.substring(0, limit);
    if (value.length > limit) {
      return limited.slice(0, limited.lastIndexOf(' ')) + trail;
    } else {
      return value;
    }
  }
}
