import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(seconds: any, args?: any): any {
    const wholeSeconds = Math.floor(seconds);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes - (hours * 60);

    let secondsLeft: number | string = wholeSeconds % 60;
    if (secondsLeft < 10) {
      secondsLeft = '0' + secondsLeft;
    }

    return hours ? `${hours}:${minutesLeft}:${secondsLeft}` : `${minutesLeft}:${secondsLeft}`;
  }

}
