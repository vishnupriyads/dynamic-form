import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  formData: any = [];
  constructor() { }
  
  setData(data){
   this.formData.push(data)
  }

  getData(){
    return new Promise((resolve) => {
      return resolve(this.formData);
    })
  }
}
