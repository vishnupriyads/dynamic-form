import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent implements OnInit {
  createForm: FormGroup;
  selectFieldType: string;
  selectForm: FormGroup;
  options: any = [];
  viewForm: any = [];

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: [""],
      label: [""],
      placeholder: [""],
      id: [""],
      fieldType: [""],
      inputType: [""]
    })
  }
  //To create form fields
  onCreate() {
    let formData = {};
    formData = this.createForm.value;

    if (this.selectFieldType == "select") {
      formData['option'] = this.options;
    }
    this.dataService.setData(formData);
    window.alert("Field Created Successfully.Go to view form to view the form fields");
  }
//when input change it triggers the function
  onFieldChange(event) {
    this.selectFieldType = event.target.value;

    if (this.selectFieldType == "select") {
      this.initiateSelectForm();
    }
  }
  //initiate select group when field type is select
  initiateSelectForm() {
    this.selectForm = this.formBuilder.group({
      optionToDisplay: [""],
      optionValue: [""]
    })
  }
  //To push select form into option array
  addOption(){
    this.options.push(this.selectForm.value);
  }
}
