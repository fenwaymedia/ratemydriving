import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  plate: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // this.authService.getProfile().subscribe(profile => {
    //   this.plate = profile.user;
    // }, err => {
    //   console.log(err);
    //   return false;
    // })
  }

}