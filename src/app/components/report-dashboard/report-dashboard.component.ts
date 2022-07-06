import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from 'src/app/case.service';
import { DashboardItem} from 'src/app/models/case';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent implements OnInit {
  //DbItems: DashboardItem[] = M_DASHBOARD
  DbItems: DashboardItem[] = []
  
  constructor(
    private caseService: CaseService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getCasesStatus();
  }
  onNewCase(){
    this.router.navigateByUrl('/design')
  }
  getCasesStatus(): void{
    this.caseService.getCases()
    .subscribe({
      next: (cases) => this.DbItems = cases.result 
    })

  }
}
