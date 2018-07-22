
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HiremeComponent } from './hireme/hireme.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'angular',
    loadChildren: './angular-tut/angular-tut.module#AngularTutModule'
  },
  {
    path: 'c-programming',
    loadChildren: './c-language/c-language.module#CLanguageModule'
  },
  {
    path: 'js-module',
    loadChildren: './javascript/javascript.module#JavaScriptModule'
  },
  {
    path: 'rxjs',
    loadChildren: './rxjs/rxjs.module#RxjsModule'
  },
  {
    path: 'hireme',
    component: HiremeComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

