import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularIntrodComponent } from './topics/angular-introd/angular-introd.component';
import { AngularRoutingModule } from './angular-tut-routing';
import { MaterialModule } from './../material_module/material.module';
import { AngularCreateAppComponent } from './topics/angular-create-app/angular-create-app.component';
import { AngularPlaceholderComponent } from './topics/angular-placeholder/angular-placeholder.component';
import { HttpClientComponent } from './topics/http-client/http-client.component';

@NgModule({
  imports: [
    CommonModule,
    AngularRoutingModule,
    MaterialModule
  ],
  declarations: [
    AngularIntrodComponent,
    AngularCreateAppComponent,
    AngularPlaceholderComponent, HttpClientComponent
  ]
})
export class AngularTutModule { }
