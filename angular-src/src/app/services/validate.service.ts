import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(info) {
    if (info.licenseNum == undefined || info.state == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
