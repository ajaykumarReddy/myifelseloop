import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CintroductionComponent } from './cintroduction/cintroduction.component';
import { ClanguagemenuComponent } from './clanguagemenu/clanguagemenu.component';
import { CconstantsComponent } from './cconstants/cconstants.component';
import { CvariablesComponent } from './cvariables/cvariables.component';

const routes: Routes = [
  {
    path: '',
    component: ClanguagemenuComponent, 
    children: [
      {
        path: '',
        component: CintroductionComponent 
      },
      {
        path: 'constants-in-c',
        component:  CconstantsComponent
      },
      {
        path: 'variables-in-c',
        component:  CvariablesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CLanguageRoutingModule { }
