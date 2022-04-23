import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CurrencyArs } from './currency-ars.pipe';



@NgModule({
  declarations: [
    CurrencyArs
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyArs
  ]
})
export class CurrencyPipeModule { }
