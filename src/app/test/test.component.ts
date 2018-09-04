import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  message: string;
  constructor(private ts: TestService) { }

  ngOnInit() {
    this.message = this.ts.get();
  }

}
