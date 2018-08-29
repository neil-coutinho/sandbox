import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q',
  templateUrl: './q.component.html',
  styleUrls: ['./q.component.css']
})
export class QComponent implements OnInit {
  status = 200;
  flag:boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleFlag() {
    this.flag = !this.flag;
  }

}
