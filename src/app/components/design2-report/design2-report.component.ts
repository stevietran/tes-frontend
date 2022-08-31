import { Component, Input, OnInit } from '@angular/core';
import { ReportApp2, ViewItem } from 'src/app/models/report';
import { M_REPORT_2 } from 'src/assets/m-data/m-report-2';

import { ChartConfiguration, ChartType} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ProfileItem, ProfileItemArray } from 'src/app/models/case';
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

  width="450" 
  height="350"

  lineChartData_loadsplit
  : ChartConfiguration<"line",any[]>['data']= {
    datasets: 
    [
      { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Chiller 1',
      },
      { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Chiller 2',
      }
    ],
    labels: ['0', '8', '16']
  };

  lineChartData_loadsplit_notes
  : ChartConfiguration<"line",any[]>['data']= {
    datasets: 
    [
      { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Chiller 1',
      },
      { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Chiller 2',
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
        label: 'Chiller 1',
       },
       { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Chiller 2',
       }
    ],
    labels: ['0', '4', '8', '12', '16', '20']
  };

  lineChartData_electricsplit_notes
  : ChartConfiguration<"line",any[]>['data'] = {
    datasets: 
    [
      { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Chiller 1',
       },
       { 
        data: [72, 72, 78, 75, 77, 75], 
        label: 'Chiller 2',
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
        label: 'Chiller 1',
       },
       { 
        data: [72, 72, 78, 75, 75, 75], 
        label: 'Chiller 2',
       }
    ],
    labels: ['0', '4', '8', '12', '16', '20']
  };

  lineChartData_cost_notes
  : ChartConfiguration<"line",any[]>['data'] = {
    datasets: 
    [
      { 
        data: [72, 72, 78, 75, 75, 75], 
        label: 'Chiller 1',
       },
       { 
        data: [72, 72, 78, 75, 75, 75], 
        label: 'Chiller 2',
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
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };
  
  lineChartType: ChartType = 'line';

  constructor(
    private route: ActivatedRoute,
    private design1Service: Design1Service
  ) { }

  ngOnInit(): void {
    this.getDummyResult();
    //this.getResult();
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

  genDatasets(data_profile: ProfileItemArray[]){
    let data_array:any[]=[];
    let label:any[] = [];

    for (let index = 0; index < data_profile.length; index++) {
      let item = data_profile[index]
      label.push(item.time)
      
      if (index == 0){
        item.value.forEach(element => {
          data_array.push([element])
        });
      }
      else {
        for (let index = 0; index < item.value.length; index++) {
          data_array[index].push(item.value[index]);
        }
      }
    }
    let datasets = []
    for (let index = 0; index < data_array.length; index++) {
      datasets.push({
        data : data_array[index],
        label: `Chiller ${index}`
      });
    }
    return [datasets, label]
  }

  genDisplayArrays(res: ReportApp2){
    this.tes_attr = [];
    this.tes_attr.push({key: "type", value: res.tes_type});
    for (let key in res.tes_attr){
      let value = res.tes_attr[key];
      if (typeof(value) === 'number'){
        value = parseFloat(value.toFixed(3));
        // console.log(value)
      }
      this.tes_attr.push({key: key, value: value});      
    }

    // this.tes_op_attr
    this.tes_op_attr = [];
    for (let key in res.tes_op_attr){
      let value = res.tes_op_attr[key];
      if (typeof(value) === 'number'){
        value = parseFloat(value.toFixed(3));
        // console.log(value)
      }
      this.tes_op_attr.push({key: key, value: value});
    }

    this.optimiser = [];
    this.optimiser.push ({key:"chiller", value: res.chiller});
    this.optimiser.push ({key:"chiller_no_tes", value: res.chiller_no_tes});
    this.optimiser.push ({key:"capex", value: parseFloat(res.capex.toFixed(3))});
    this.optimiser.push ({key:"lcos", value: parseFloat(res.lcos.toFixed(3))});
    this.optimiser.push ({key:"lcos_no_tes", value: parseFloat(res.lcos_no_tes.toFixed(3))});  
    this.optimiser.push ({key:"run_time", value: parseFloat(res.run_time.toFixed(3))});  

    this.htf = [];
    this.htf.push({key: "name", value: res.htf});
    for (let key in res.htf_attr){
      let value = res.htf_attr[key];
      if (typeof(value) === 'number'){
        if (key.includes('mu')){
          value = value.toExponential(2);
        }
        else{
          value = parseFloat(value.toFixed(3));
        }
        // console.log(value)
      }
      this.htf.push({key: key, value: value});
    }

    this.material = [];
    this.material.push({key: "name", value: res.material});
    for (let key in res.material_attr){
      let value = res.material_attr[key];
      if (typeof(value) === 'number'){
        value = parseFloat(value.toFixed(3));
        // console.log(value)
      }
      this.material.push({key: key, value: value});
    }

    // Load data
    let [load_datasets, load_label] = this.genDatasets(res.load_split_profile)
    this.lineChartData_loadsplit.datasets = load_datasets
    this.lineChartData_loadsplit.labels = load_label;
    
    // Load data NO TES
    let [load_datasets_notes, load_label_notes] = this.genDatasets(res.load_split_profile_no_tes)
    this.lineChartData_loadsplit_notes.datasets = load_datasets_notes
    this.lineChartData_loadsplit_notes.labels = load_label_notes;

    // Electric data
    let [electric_datasets, electric_label] = this.genDatasets(res.electric_split_profile)
    this.lineChartData_electricsplit.datasets= electric_datasets;
    this.lineChartData_electricsplit.labels = electric_label;

    // Electric data no tes
    let [electric_datasets_notes, electric_label_notes] = this.genDatasets(
      res.electric_split_profile_no_tes
      )
    this.lineChartData_electricsplit_notes.datasets= electric_datasets_notes;
    this.lineChartData_electricsplit_notes.labels = electric_label_notes;

    // Cost data
    let [cost_datasets, cost_label] = this.genDatasets(res.cost_split_profile)
    this.lineChartData_cost.datasets= cost_datasets;
    this.lineChartData_cost.labels = cost_label;

    // Cost data notes
    let [cost_datasets_notes, cost_label_notes] = this.genDatasets(res.cost_split_profile_no_tes)
    this.lineChartData_cost_notes.datasets= cost_datasets_notes;
    this.lineChartData_cost_notes.labels = cost_label_notes;
  }
}
