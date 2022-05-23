import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  phoneRegex = RegExp(
    /^\+84\d{9,10}$/
  );

  constructor() {
  }

  validatePhoneFn() {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = this.phoneRegex.test(control.value);
      return valid ? null : {invalidPhone: true};
    };
  }
}

