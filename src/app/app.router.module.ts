
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

