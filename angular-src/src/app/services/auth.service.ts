import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerLicense(license){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json', 'Access-Control-Allow-Origin' : '*',);
    return this.http.post('http://localhost:3000/home/register', license, {headers: headers})
      .pipe(map(res => res.json()));
  }
}
