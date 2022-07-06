import { Component, OnInit } from '@angular/core';

const FORM_INFO = [
  { id:'T1', name: 'Lower Temperature Boundary', value: '-10'},
  { id:'T2', name: 'Upper Temperature Boundary', value: '100'},
  { id:'Toxicity', name: 'Toxicity Level', value: 'None'},
  { id:'Phase', name: 'HTF Phase', value: 'Gas'},
  { id:'Particle_Diameter', name: 'Particle Dimameter of TES Material', value: '0.015'},
  { id:'Mass_Flow_Rate', name: 'Mass Flow Rate', value: '0.3'},
  { id:'Mass_Sensible', name: 'Mass of TES Material', value: '2560'},
  { id:'M_x', name: 'Number of space step', value: '80'},
  { id:'T_Charge', name: 'Charging Time (s)', value: '20000'},
  { id:'Delta_T', name: 'Time Step in senconds', value: '0.01'}
];

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  constructor() { }
  
  displayedColumns: string[] = ['name', 'value'];
  dataSource = FORM_INFO;
  
  ngOnInit(): void {
  }

}
