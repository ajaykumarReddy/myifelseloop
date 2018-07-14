import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularIntrodComponent } from './topics/angular-introd/angular-introd.component';

const routes: Routes = [
  {
    path: '',
    component: AngularIntrodComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
