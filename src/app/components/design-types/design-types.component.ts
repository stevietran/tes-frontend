import { Component, OnInit } from '@angular/core';
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
  
  constructor(private caseService: CaseService) { }
  changeApp(value: string){
    this.caseService.app_type = value;
  }

  ngOnInit(): void {
  }

}
