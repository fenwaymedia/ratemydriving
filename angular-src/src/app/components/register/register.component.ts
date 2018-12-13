import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  licenseNum: string;
  state: string;

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
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

    this.authService.registerLicense(info).subscribe(data => {
      if (data) {
        this.flashMessage.show('License Plate Registered', { cssClass: 'alert-primary', timeout: 2000 });
        this.router.navigate(['/register']);
      } else {
        this.flashMessage.show('License Plate Failed', { cssClass: 'alert-danger', timeout: 2000 });
        this.router.navigate(['/register']);
      }
    })

  }

}
