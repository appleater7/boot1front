import { Component, OnInit } from '@angular/core';
import { User } from '../board/user';
import { BoardService } from '../board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  isLogin:boolean;
  constructor(private _bs:BoardService, private _ro:Router) { }
    
  ngOnInit() {
    this.isLogin=false;
  }
  login(){
    this._bs.login(this.user).subscribe(res=>{
      if(res){
        this.user = <User>res;
        localStorage.setItem("id",this.user.uiId);
        localStorage.setItem("tokken",this.user.tokken);
        this.isLogin = true;
        this._ro.navigate(['login']);
      }   
    });
  }
  logout(){
    localStorage.setItem("id","");
    localStorage.setItem("tokken","");
    this.isLogin=false;
    this._ro.navigate(['login']);
  }

}
