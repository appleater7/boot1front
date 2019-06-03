import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  users:User[]=[];
  constructor(private _bs:BoardService) { }

  ngOnInit() {
  }

}
