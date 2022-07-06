import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CaseService } from 'src/app/case.service';
import { AccuracyLevel, CaseSubmit, Params, ProfileItem } from "src/app/models/case";
import { M_ACCURACY_LEVELS } from 'src/assets/m-data/m-accuracy-levels'

@Component({
  selector: 'app-design1-form',
  templateUrl: './design1-form.component.html',
  styleUrls: ['./design1-form.component.css']
})
export class Design1FormComponent implements OnInit {
  AccuracyLevels: Array<string> = [];
  public profileArray: Array<ProfileItem> = [];

  caseForm = new UntypedFormGroup({
    pressure: new UntypedFormControl(1.0),
    upper_temperature: new UntypedFormControl(100.0),
    lower_temperature: new UntypedFormControl(-10.0),
    accuracy_level: new UntypedFormControl(""),
  });

  constructor(
    private caseService: CaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAccuracyList();
  }

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

  getAccuracyList(){
    for (let index in M_ACCURACY_LEVELS) {
      const element = M_ACCURACY_LEVELS[index];
      this.AccuracyLevels.push(element.name);
    }
  }

  onSubmit() {
    // Get case params from the form
    let caseParam: Params = {
      app: this.caseService.app_type,
      pressure: this.caseForm.value.pressure,
      upper_temperature: this.caseForm.value.upper_temperature,
      lower_temperature: this.caseForm.value.lower_temperature,
      accuracy_level: this.caseForm.value.accuracy_level,
    }
  
    let caseInfo: CaseSubmit={
      params: caseParam, 
      flowrate: this.profileArray
    }

    this.caseService.submitCase(caseInfo)
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
