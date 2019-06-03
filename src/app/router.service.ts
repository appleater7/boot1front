import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private _router:Router) {}
  
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
    console.log(`id:${localStorage.getItem('id')}`);
    if(localStorage.getItem('id')){
      return true;
    }else {
      this._router.navigate(['login']);
      return false;
    }
  }
}
