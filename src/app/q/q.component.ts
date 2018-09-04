import { Component, OnInit } from '@angular/core';
import { QService } from './q.service';
@Component({
  selector: 'app-q',
  templateUrl: './q.component.html',
  styleUrls: ['./q.component.css'],
  providers: [ QService ]
})
export class QComponent implements OnInit {
  status = 200;
  flag:boolean;
  user:  {name: string};
  data: string;
  constructor(public qservice: QService) { }

  ngOnInit() {
    this.user = this.qservice.user;
    this.data = this.qservice.get();
  }
  /**
   * [toggle the value of the flag property]
   * @return [description]
   */
  toggleFlag() {
    this.flag = !this.flag;
  }

  /**
   * [return the sum of two values passed]
   * @param  number1 [description]
   * @param  number2 [description]
   * @return         [description]
   */
  sum(number1, number2){
    return number1+number2;
  }

  log(param){
  let result = this.capitalize(param);
   return result;
  }

  capitalize(param) {
    return param.toUpperCase();
  }

  throwsError() {
    throw 'Hello World';
  }

  get() {
    this.data = this.qservice.get();
  }

  getAsync() {
    return this.qservice.getAsyc().then((data: string) =>{
      this.data = data;
    });
  }

}
