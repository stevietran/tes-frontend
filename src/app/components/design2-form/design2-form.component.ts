import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CaseService } from 'src/app/case.service';
import { CaseSubmit, CaseSubmit_2, LoadData, Params_Design2, ProfileItem } from "src/app/models/case";
import { M_ACCURACY_LEVELS } from 'src/assets/m-data/m-accuracy-levels';
import { M_COUNTRY_LIST } from 'src/assets/m-data/m-country-list';
import { LOAD_DATA, M_LOADTYPE_LIST } from 'src/assets/m-data/m-loadtype-list';

@Component({
  selector: 'app-design2-form',
  templateUrl: './design2-form.component.html',
  styleUrls: ['./design2-form.component.css']
})
export class Design2FormComponent implements OnInit {
  AccuracyLevels: Array<string> = [];
  CountryList: Array<string> = [];
  LoadtypeList: Array<string> = [];
  selectedOption: string = "";

  public profileArray: Array<ProfileItem> = [];

  loadForm = new UntypedFormGroup({
    load_value: new UntypedFormControl(5000),
    load_selection: new UntypedFormControl("")
  });

  caseForm = new UntypedFormGroup({
    safety_factor: new UntypedFormControl(20),
    accuracy_level: new UntypedFormControl(""),
    country_selection: new UntypedFormControl("")
  });

  // Form navigation
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(
    private caseService: CaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAccuracyList();
    this.getCountryList();
    this.getLoadtypeList();
  }

  getAccuracyList(){
    for (let index in M_ACCURACY_LEVELS) {
      const element = M_ACCURACY_LEVELS[index];
      this.AccuracyLevels.push(element.name);
    }
  }

  getCountryList(){
    for (let index in M_COUNTRY_LIST) {
      const element = M_COUNTRY_LIST[index];
      this.CountryList.push(element.name);
    }
  }

  getLoadtypeList(){
    for (let index in M_LOADTYPE_LIST) {
      const element = M_LOADTYPE_LIST[index];
      this.LoadtypeList.push(element.name);
    }
  }

  onSubmit() {
    let app_type = this.caseService.app_type

    let caseParam:Params_Design2 = {
      app: app_type,
      safety_factor: this.caseForm.value.safety_factor,
      country_selection: this.caseForm.value.country_selection,
      accuracy_level: this.caseForm.value.accuracy_level,
    };

    let loadData:LoadData;

    if (this.selectedOption == "Yes"){
      loadData = {
        load_type: LOAD_DATA[0],
        load_profiles: this.profileArray
      }
    }
    else { 
      loadData = {
        load_type: LOAD_DATA[1],
        load_selection: this.loadForm.value.load_selection,
        load_value: this.loadForm.value.load_selection,
      }  
    }
    
    let caseInfo: CaseSubmit_2={
      params: caseParam, 
      type: app_type,
      load_data: loadData
    }

    this.caseService.submitCase_2(caseInfo)
    .subscribe({
      next: () => this.router.navigateByUrl('/dashboard')
    })

    // console.warn(this.caseForm.value);
  }
  
  onFileChange(fileList: FileList | null){
    if (fileList?.length) {
      let file = fileList[0];
      let fileReader = new FileReader();
      this.profileArray = [];
      
      fileReader.onload = (e) => {
        var data = fileReader.result;
        if (data){
          let csvToRowArray = (<string>data).split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            let item: ProfileItem = {time: parseInt( row[0], 10), value: parseFloat(row[1])}
            this.profileArray.push(item);
          }
        }
      }
      fileReader.readAsText(file);
    }
  }

}
