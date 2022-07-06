import { Injectable } from '@angular/core';
import { M_REPORT_1, M_REPORT_1_DES } from 'src/assets/m-data/m-report-1';
import { ReportApp1 } from 'src/app/models/report';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface TableElement {
  name: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class Design1Service {
  private resultUrl = `${environment.apiURL}/api/result`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getReport(id: string): ReportApp1{
    var i_id = 0;
    for (let i=0; i<M_REPORT_1.length; i++){
      if  (M_REPORT_1[i].id == id){
        i_id = i;
        break;
      }
    }
    return M_REPORT_1[i_id];
  }

  // Get result from api
  getResult(id: Number): Observable<ReportApp1>{
    const url = `${this.resultUrl}/${id}`
    return this.http.get<ReportApp1>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  renderTable(report: ReportApp1): Array<TableElement>{
    var tab: Array<TableElement> = [];
    for (let [key, value] of Object.entries(report)){
      if (key == "id"){
        continue
      }
      let tab_element = <TableElement>{};
      tab_element.name = M_REPORT_1_DES[key];
      tab_element.value = value;
      tab.push(tab_element);
    }
    return tab
  }
  
  getTable(id: string): Array<TableElement>{
    return(this.renderTable(this.getReport(id)))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
