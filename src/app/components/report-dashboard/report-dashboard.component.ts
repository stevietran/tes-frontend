import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from 'src/app/case.service';
import { CASE_STATUS, DashboardItem} from 'src/app/models/case';
import { M_DASHBOARD } from 'src/assets/m-data/m-dashboard';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent implements OnInit {
  //DbItems: DashboardItem[] = M_DASHBOARD
  DbItems_done: DashboardItem[] = [];
  DbItems_submitted: DashboardItem[] = [];
  panelOpenState = false;

  constructor(
    private caseService: CaseService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  onViewResult(id: any){
    console.log(id);
    this.router.navigateByUrl(`/report2/${id}`);
  }

  onNewCase(){
    this.router.navigateByUrl('/design')
  }
  
  getCasesStatus(): void{
    this.caseService.getCases()
    .subscribe({
      next: (cases) => {
        let DbItems: DashboardItem[] = cases.result ;
        this.DbItems_done = [];
        this.DbItems_submitted = [];
    
        for (var item of DbItems){
          if (item.status == CASE_STATUS[0]){
            this.DbItems_submitted.push(item);
          }
          else if (item.status == CASE_STATUS[1]){
            this.DbItems_done.push(item);
          }
        }
      }
    })
  }

  getCasesStatus_mock(): void{
    let DbItems = M_DASHBOARD;
    this.DbItems_done = [];
    this.DbItems_submitted = [];

    for (var item of DbItems){
      if (item.status == "Submitted"){
        this.DbItems_submitted.push(item);
      }
      else{
        this.DbItems_done.push(item);
      }
    }
  }
}
