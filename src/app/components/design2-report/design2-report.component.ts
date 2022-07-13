import { Component, Input, OnInit } from '@angular/core';
import { ReportApp2, ViewItem } from 'src/app/models/report';
import { M_REPORT_2 } from 'src/assets/m-data/m-report-2';

import { ChartConfiguration, ChartType} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ProfileItem } from 'src/app/models/case';
import { ActivatedRoute } from '@angular/router';
import { Design1Service } from 'src/app/design1.service';

@Component({
  selector: 'app-design2-report',
  templateUrl: './design2-report.component.html',
  styleUrls: ['./design2-report.component.css']
})
export class Design2ReportComponent implements OnInit {
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

  constructor(
    private route: ActivatedRoute,
    private design1Service: Design1Service
  ) { }

  ngOnInit(): void {
    //this.getDummyResult();
    this.getResult();
  }

  getDummyResult(){
    // console.log(this.res.tes_attr);
    // this.tes_attr
    this.genDisplayArrays(M_REPORT_2);
  }

  getResult(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.info("The id is:", id);
    this.design1Service.getResult_2(Number(id))
    .subscribe({
      next: (res) => this.genDisplayArrays(res)
    })
    // console.log(this.res.tes_attr);
    // this.tes_attr
    
  }

  genDisplayArrays(res: ReportApp2){
    this.tes_attr = [];
    this.tes_attr.push({key: "type", value: res.tes_type});
    for (let key in res.tes_attr){
      this.tes_attr.push ({key: key, value: res.tes_attr[key]});
    }

    // this.tes_op_attr
    this.tes_op_attr = [];
    for (let key in res.tes_op_attr){
      this.tes_op_attr.push ({key: key, value: res.tes_op_attr[key]});
    }

    this.optimiser = [];
    this.optimiser.push ({key:"chiller", value: res.chiller});
    this.optimiser.push ({key:"chiller_no_tes", value: res.chiller_no_tes});
    this.optimiser.push ({key:"capex", value: res.capex});
    this.optimiser.push ({key:"capex_no_tes", value: res.capex_no_tes});
    this.optimiser.push ({key:"lcos", value: res.lcos});
    this.optimiser.push ({key:"lcos_no_tes", value: res.lcos_no_tes});  
    this.optimiser.push ({key:"cost", value: res.cost});
    this.optimiser.push ({key:"run_time", value: res.run_time});  

    this.htf = [];
    this.htf.push({key: "name", value: res.htf});
    for (let key in res.htf_attr){
      this.htf.push({key: key, value: res.htf_attr[key]});
    }

    this.material = [];
    this.material.push({key: "name", value: res.material});
    for (let key in res.material_attr){
      this.material.push({key: key, value: res.material_attr[key]});
    }

    let load_data:any[]=[];
    let load_label = [];
    for (let item of res.load_split_profile){
      load_data.push(item.value);
      load_label.push(item.time);
    }
    this.lineChartData_loadsplit.datasets[0].data= load_data;
    this.lineChartData_loadsplit.labels = load_label;

    let electric_data:any[]=[];
    let electric_label = [];
    for (let item of res.electric_split_profile){
      electric_data.push(item.value);
      electric_label.push(item.time);
    }
    this.lineChartData_electricsplit.datasets[0].data= electric_data;
    this.lineChartData_electricsplit.labels = electric_label;

    let cost_data:any[]=[];
    let cost_label = [];
    for (let item of res.cost_profile){
      cost_data.push(item.value);
      cost_label.push(item.time);
    }
    this.lineChartData_cost.datasets[0].data= cost_data;
    this.lineChartData_cost.labels = cost_label;
  }
}
