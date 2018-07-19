import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material_module/material.module';
import { CLanguageRoutingModule } from './c-language.routing';
import { CintroductionComponent } from './cintroduction/cintroduction.component';
import { ClanguagemenuComponent } from './clanguagemenu/clanguagemenu.component';
import { CconstantsComponent } from './cconstants/cconstants.component';
import { CvariablesComponent } from './cvariables/cvariables.component';


@NgModule({
  imports: [
    CommonModule,
    CLanguageRoutingModule,
    MaterialModule
  ],
  declarations: [
    CintroductionComponent,
    ClanguagemenuComponent,
    CconstantsComponent,
    CvariablesComponent]
})
export class CLanguageModule { }
