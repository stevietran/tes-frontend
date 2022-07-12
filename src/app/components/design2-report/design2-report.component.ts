import { Component, OnInit } from '@angular/core';
import { ReportApp2, ViewItem } from 'src/app/models/report';
import { M_REPORT_2 } from 'src/assets/m-data/m-report-2';

import { ChartConfiguration, ChartType} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ProfileItem } from 'src/app/models/case';

@Component({
  selector: 'app-design2-report',
  templateUrl: './design2-report.component.html',
  styleUrls: ['./design2-report.component.css']
})
export class Design2ReportComponent implements OnInit {
  res: ReportApp2 = M_REPORT_2;
  tes_attr : ViewItem[] = [];
  tes_op_attr: ViewItem[] = [];
  htf: ViewItem[] = [];
  material: ViewItem[] = [];
  optimiser: ViewItem[] = [];

  lineChartData_loadsplit
  : ChartConfiguration<"line",any[]>['data']= {
    datasets: 
    [
      { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Load Split Profile',
      }
    ],
    labels: ['0', '8', '16']
  };

  lineChartData_electricsplit
  : ChartConfiguration<"line",any[]>['data'] = {
    datasets: 
    [
      { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Electric Split Profile',
       }
    ],
    labels: ['0', '4', '8', '12', '16', '20']
  };

  lineChartData_cost
  : ChartConfiguration<"line",any[]>['data'] = {
    datasets: 
    [
      { 
        data: [72, 72, 78, 75, 75, 75], 
        label: 'Cost Profile',
       }
    ],
    labels: ['0', '4', '8', '12', '16', '20']
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
  };
  
  lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void {
    this.getDummyResult();
  }

  getDummyResult(){
    this.res = M_REPORT_2;
    console.log(this.res.tes_attr);
    // this.tes_attr
    this.tes_attr = [];
    this.tes_attr.push({key: "type", value: this.res.tes_type});
    for (let key in this.res.tes_attr){
      this.tes_attr.push ({key: key, value: this.res.tes_attr[key]});
    }

    // this.tes_op_attr
    this.tes_op_attr = [];
    for (let key in this.res.tes_op_attr){
      this.tes_op_attr.push ({key: key, value: this.res.tes_op_attr[key]});
    }

    this.optimiser = [];
    this.optimiser.push ({key:"chiller", value: this.res.chiller});
    this.optimiser.push ({key:"chiller_no_tes", value: this.res.chiller_no_tes});
    this.optimiser.push ({key:"capex", value: this.res.capex});
    this.optimiser.push ({key:"capex_no_tes", value: this.res.capex_no_tes});
    this.optimiser.push ({key:"lcos", value: this.res.lcos});
    this.optimiser.push ({key:"lcos_no_tes", value: this.res.lcos_no_tes});  
    this.optimiser.push ({key:"cost", value: this.res.cost});
    this.optimiser.push ({key:"run_time", value: this.res.run_time});  

    this.htf = [];
    this.htf.push({key: "name", value: this.res.htf});
    for (let key in this.res.htf_attr){
      this.htf.push({key: key, value: this.res.htf_attr[key]});
    }

    this.material = [];
    this.material.push({key: "name", value: this.res.material});
    for (let key in this.res.material_attr){
      this.material.push({key: key, value: this.res.material_attr[key]});
    }

    let load_data:any[]=[];
    let load_label = [];
    for (let item of this.res.load_split_profile){
      load_data.push(item.value);
      load_label.push(item.time);
    }
    this.lineChartData_loadsplit.datasets[0].data= load_data;
    this.lineChartData_loadsplit.labels = load_label;

    let electric_data:any[]=[];
    let electric_label = [];
    for (let item of this.res.electric_split_profile){
      electric_data.push(item.value);
      electric_label.push(item.time);
    }
    this.lineChartData_electricsplit.datasets[0].data= electric_data;
    this.lineChartData_electricsplit.labels = electric_label;

    let cost_data:any[]=[];
    let cost_label = [];
    for (let item of this.res.cost_profile){
      cost_data.push(item.value);
      cost_label.push(item.time);
    }
    this.lineChartData_cost.datasets[0].data= cost_data;
    this.lineChartData_cost.labels = cost_label;
  }
}
