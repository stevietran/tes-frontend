import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResponse, SignupRequest, User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private auth_token = "";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };

  private httpOptionsForm = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };


  constructor(private http: HttpClient) { }

  getAuthorizationToken() {
    return this.auth_token;
  }

  /** POST: send user detail and get logon token*/
  logIn(user: User): Observable<LoginResponse> {
    const body = new HttpParams()
    .set('username', user.username)
    .set('password', user.password);

    return this.http.post<LoginResponse>(environment.logUrl, body, this.httpOptionsForm)
    .pipe(
      tap((res: LoginResponse) => this.auth_token = res.token_type + " " + res.access_token),
      catchError(this.handleError)
    );
  }

  /** POST: request new user */
  signUp(req: SignupRequest): Observable<SignupRequest> {
    return this.http.post<SignupRequest>(environment.signupUrl, req, this.httpOptions)
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
