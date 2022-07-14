import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignTypesComponent } from './components/design-types/design-types.component';
import { Design1FormComponent } from './components/design1-form/design1-form.component';
import { Design2FormComponent } from './components/design2-form/design2-form.component';
import { Design1ReportComponent } from './components/design1-report/design1-report.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportDashboardComponent } from './components/report-dashboard/report-dashboard.component';
import { Design2ReportComponent } from './components/design2-report/design2-report.component';

const routes: Routes = [
  { path: 'report2/:id', component: Design2ReportComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'design', component: DesignTypesComponent },
  { path: 'd1form', component: Design1FormComponent},
  { path: 'd2form', component: Design2FormComponent},
  { path: 'dashboard', component: ReportDashboardComponent},
  { path: 'report1/:id', component: Design1ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
