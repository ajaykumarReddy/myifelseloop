import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularIntrodComponent } from './topics/angular-introd/angular-introd.component';
import { AngularRoutingModule } from './angular-tut-routing';

@NgModule({
  imports: [
    CommonModule,
    AngularRoutingModule
  ],
  declarations: [AngularIntrodComponent]
})
export class AngularTutModule { }
