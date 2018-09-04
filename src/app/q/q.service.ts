import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



export class QService {
  user = {name: 'Neil'};
  constructor() { }

  getAsyc() {

    let result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('OLA');
      }, 2000)

    });

    return result;

  }


  get() {
    return 'A';
  }

}
