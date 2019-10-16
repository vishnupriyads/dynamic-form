import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss']
})
export class ViewformComponent implements OnInit {

  formData : any = [];
  formDetails: any;
  constructor(private data: DataService) { }

  ngOnInit() { 
    this.data.getData().then(res => {
      this.formData = res;
    })
  }
  //When input change it triggers the funcion
  onFieldChange(event, key) {
    let data = event.target.value;
    this.formDetails = {
      key : key,
      value : data
    }
   
  }
}
