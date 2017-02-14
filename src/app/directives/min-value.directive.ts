import {  
  FormBuilder,  
  FormGroup,  
  Validators, ValidatorFn, NG_VALIDATORS, Validator,
  AbstractControl  
} from '@angular/forms';

import { SimpleChanges, OnChanges, Input, Directive } from '@angular/core';  

@Directive({
  selector: '[minValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValueDirective, multi: true}]
})
export class MinValueDirective implements Validator, OnChanges {
  @Input() minValue: string;
  private valFn = Validators.nullValidator;
  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['minValue'];
    if (change) {
      this.valFn = minValue(change.currentValue);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }
  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}

export function minValue(max: Number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const input = control.value,
          isValid = input < max;
    if(isValid) 
        return { 'minValue': {max} }
    else 
        return null;
  };
}