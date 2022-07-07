import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from 'src/app/case.service';

@Component({
  selector: 'app-design-types',
  templateUrl: './design-types.component.html',
  styleUrls: ['./design-types.component.css']
})
export class DesignTypesComponent implements OnInit {
  viewData: any;

  Designs: any = ['LNG Cold Recovery', 
  'Cooling Peak Load Shifting'];
  
  constructor(private caseService: CaseService,
    private router: Router) { }
  changeApp(value: string){
    this.caseService.app_type = value;
  }
  setRouter(){
    if (this.caseService.app_type == this.Designs[0]){
      this.router.navigateByUrl('/d1form')
    }

    if (this.caseService.app_type == this.Designs[1]){
      this.router.navigateByUrl('/d2form')
    }
  }

  ngOnInit(): void {
  }

}
