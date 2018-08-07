import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CintroductionComponent } from './cintroduction/cintroduction.component';
import { ClanguagemenuComponent } from './clanguagemenu/clanguagemenu.component';
import { CconstantsComponent } from './cconstants/cconstants.component';
import { CvariablesComponent } from './cvariables/cvariables.component';
import { CKeywordsComponent } from './c-keywords/c-keywords.component';

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
      },
      {
        path: 'c-keywords-identifiers',
        component:  CKeywordsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CLanguageRoutingModule { }
