import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AngularComponent }  from '../angular/angular.component';
import { LaravelComponent }  from '../laravel/laravel.component';
import { ApiTestComponent }  from '../api-test/api-test.component';
import { NotFoundComponent  }  from '../not-found/not-found.component';

const home = { "path":"angular","label":"Angular"};

const routes: Routes = [
  { path: '', redirectTo: home.path, pathMatch: 'full' },
  { path: home.path,  component: AngularComponent },
  { path: 'laravel', component: LaravelComponent },
  { path: 'api-test', component: ApiTestComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class FrontRoutingModule {

}
