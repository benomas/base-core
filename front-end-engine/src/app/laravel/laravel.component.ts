import { Component, OnInit } from '@angular/core';
import { LaravelFramework } from '../laravel-framework';

@Component({
  selector: 'laravel',
  templateUrl: './laravel.component.html',
  styleUrls: ['./laravel.component.css']
})
export class LaravelComponent implements OnInit {

  laravelInstance: LaravelFramework;
  constructor() { }

  setLaravelInstance():void{
      this.laravelInstance = new LaravelFramework();
      this.laravelInstance.id=2;
      this.laravelInstance.programingLenguage='php';
      this.laravelInstance.name='Laravel 5.4';
      this.laravelInstance.description='The PHP Framework For Web Artisans';
      this.laravelInstance.status=true;
      this.laravelInstance.sourceUrl='https://laravel.com/';
      this.laravelInstance.type='back-end';
      this.laravelInstance.ext='php';
      this.laravelInstance.sourceUrl ='file/laravel.png';
      this.laravelInstance.laravelProperty1='laravel property 1';
      this.laravelInstance.laravelProperty2='laravel property 2';
      this.laravelInstance.laravelProperty3='laravel property 3';
  }

  ngOnInit() {
    this.setLaravelInstance();
  }

}
