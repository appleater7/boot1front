import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from './board/user';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  baseUrl:string = 'http://localhost:88/';
  headers:HttpHeaders;

  constructor(private _http:HttpClient, private _ro:Router) { }

  login(user:User){
    return this._http.post(this.baseUrl+'login',user);
  }
}

