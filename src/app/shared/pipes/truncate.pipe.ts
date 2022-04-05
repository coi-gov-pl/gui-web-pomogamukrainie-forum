import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 20, trail = '...'): string {
    const limited = value.substring(0, limit);
    return value.length > limit ? limited.slice(0, limited.lastIndexOf(' ')) + trail : value;
  }
}
