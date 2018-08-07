import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material_module/material.module';
import { CLanguageRoutingModule } from './c-language.routing';
import { CintroductionComponent } from './cintroduction/cintroduction.component';
import { ClanguagemenuComponent } from './clanguagemenu/clanguagemenu.component';
import { CconstantsComponent } from './cconstants/cconstants.component';
import { CvariablesComponent } from './cvariables/cvariables.component';
import { SharedModule } from './../shared-module/shared.module';
import { CKeywordsComponent } from './c-keywords/c-keywords.component';


@NgModule({
  imports: [
  CommonModule,
    CLanguageRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    CintroductionComponent,
    ClanguagemenuComponent,
    CconstantsComponent,
    CvariablesComponent,
    CKeywordsComponent]
})
export class CLanguageModule { }
