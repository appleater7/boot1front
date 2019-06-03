import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { RouterService } from './router.service';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'board',
    component:BoardComponent
    ,
    canActivate:[RouterService]
  },
  {
    path:'',
    component:HomeComponent
    ,
    canActivate:[RouterService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
