import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CaseSubmit, CaseSubmit_2, SubmitResponse, DashboardItem, DashboardResponse } from './models/case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  public app_type: string = "";
  private caseUrl = `${environment.apiURL}/api/case`;
  private case2Url = `${environment.apiURL}/api/case/pls`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** POST: submit a case */
  submitCase(req: CaseSubmit): Observable<SubmitResponse> {
    return this.http.post<SubmitResponse>(this.caseUrl, req, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  /** POST: submit a case for App 2*/
  submitCase_2(req: CaseSubmit_2): Observable<SubmitResponse> {
    return this.http.post<SubmitResponse>(this.case2Url, req, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  /** GET: get status of all submitted cases */
  getCases(): Observable<DashboardResponse> {
    return this.http.post<DashboardResponse>(`${this.caseUrl}/all`, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
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
