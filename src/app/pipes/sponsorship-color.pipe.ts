import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sponsorshipColor',
  standalone: true
})
export class SponsorshipColorPipe implements PipeTransform {

  transform(value: number, threshold: number = 1000): { [key: string]: string } {
    if (value >= threshold) {

      return { color: 'green' };
    }

    return { color: 'black' };
  }

}
