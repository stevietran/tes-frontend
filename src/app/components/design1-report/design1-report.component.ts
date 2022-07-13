import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Design1Service, TableElement } from 'src/app/design1.service';

@Component({
  selector: 'app-design1-report',
  templateUrl: './design1-report.component.html',
  styleUrls: ['./design1-report.component.css']
})
export class Design1ReportComponent implements OnInit {
  @Input() dataSource?: Array<TableElement>;
  @Input() reportID?: string;
  @Input() displayedColumns: string[] = ['demo-name', 'demo-value'];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private design1Service: Design1Service
  ) { }

  getData(): void{
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.info("The id is:", id);
    this.reportID = id;
    this.design1Service.getResult(Number(id))
    .subscribe({
      next: (res) => this.dataSource = this.design1Service.renderTable(res)
    })
  }

  goBack(): void {
    this.location.back();
  }
  print(): void {
  }

  ngOnInit(): void {
    this.getData()
  }

}
