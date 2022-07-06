import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feePayer'
})
export class FeePayerPipe implements PipeTransform {

  transform(value: string): string {
    //use translateService.instant('some.translation.key') function here


  switch (value) {
    case "payer": return 'Cliente';
    case "collector": return 'Mariano';
    default: return value;
  }

}
}
