import { Component,OnInit } from '@angular/core';
import { AngularFramework } from './angular-framework';
import { LaravelFramework } from './laravel-framework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Base "laravel 5.4/Angular 2.4"';
  levels = [{"label":"Angular 2.4","route":"angular"},
            {"label":"Laravel 5.4","route":"laravel"},
            {"label":"Probar api","route":"api-test"}];

  ngOnInit(): void {
  }
}
