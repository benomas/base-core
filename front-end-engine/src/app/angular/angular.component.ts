import { Component, OnInit } from '@angular/core';
import { AngularFramework } from '../angular-framework';

@Component({
  selector: 'angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  angularInstance: AngularFramework;
  constructor() {
  }

  setAngularInstance():void{
      this.angularInstance = new AngularFramework();
      this.angularInstance.id=1;
      this.angularInstance.programingLenguage='javascript';
      this.angularInstance.name='Angular 2.4';
      this.angularInstance.description='One framework. Mobile & desktop.';
      this.angularInstance.status=true;
      this.angularInstance.sourceUrl='https=//angular.io/';
      this.angularInstance.type='front-end';
      this.angularInstance.ext='js';
      this.angularInstance.sourceUrl ='file/angular.png';
      this.angularInstance.angularProperty1='angular property 1';
      this.angularInstance.angularProperty2='angular property 2';
      this.angularInstance.angularProperty3='angular property 3';
  }

  ngOnInit() {
    this.setAngularInstance();
  }

}
