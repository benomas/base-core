import { Component, OnInit } from '@angular/core';
import { Http, Response,Headers, RequestOptions }   from '@angular/http';

import { ApiCallerService }  from '../api-caller.service';
import { ApiTestResponse } from  '../api-test-response';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent {
  protected apiResponse:any;
  protected errorMessage:any;
  protected apiCallerService:ApiCallerService;
  mode = 'Observable';
  //constructor(private apiCallerService: ApiCallerService) {}
  constructor(private http: Http) {
    this.apiCallerService = new ApiCallerService(this.http);
  }

  ngOnInit() {
  }

  callApi(apiObject:string,apiAction:string,apiParam:string):void{
    this.apiResponse='';
    if(
        typeof apiObject!=='undefined' && apiObject && apiObject!=='' &&
        typeof apiAction!=='undefined' && apiAction && apiAction!=='' &&
        typeof apiParam!=='undefined' && apiParam && apiParam!==''
      ){
        this.apiCallerService
        .getTest(apiObject,apiAction,apiParam).subscribe(apiResponse =>{ this.apiResponse = JSON.stringify(apiResponse)},
                error =>  this.errorMessage = <any>error);
    }
    else
      alert('No se han definido los campos necesarios');
  }
}
