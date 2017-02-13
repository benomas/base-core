import { Injectable, OnInit }       from '@angular/core';
import { Http, Response,Headers, RequestOptions }   from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ApiTestResponse } from  './api-test-response';

@Injectable()
export class ApiCallerService{

  private apiUrl = 'api';  // URL to web api

  constructor(private http: Http) {}

  getTest(object: string,action: string, param:string): Observable<ApiTestResponse> {
    const url = `${this.apiUrl}/${object}/${action}/${param}`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
