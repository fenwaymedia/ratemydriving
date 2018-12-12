import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  licenseNum: string;
  state: string;

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegister() {
    console.log('hi from register')
    const info = {
      licenseNum: this.licenseNum,
      state: this.state
    }

    if (!this.validateService.validateRegister(info)) {
      this.flashMessage.show('Please Enter in All Fields', { cssClass: 'alert-danger', timeout: 2000 });
      // this.flashMessage.show('Failure!', { cssClass: 'alert-danger' } );
      console.log('should be flashing');
      return false;
    }
  }

}
