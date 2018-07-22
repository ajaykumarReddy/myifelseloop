import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularIntrodComponent } from './topics/angular-introd/angular-introd.component';
import { AngularRoutingModule } from './angular-tut-routing';
import { MaterialModule } from '../material_module/material.module';
import { AngularCreateAppComponent } from './topics/angular-create-app/angular-create-app.component';
import { AngularPlaceholderComponent } from './topics/angular-placeholder/angular-placeholder.component';
import { HttpClientComponent } from './topics/http-client/http-client.component';
import { AngularServiceComponent } from './topics/angular-service/angular-service.component';
import { AngularElementComponent } from './topics/angular-element/angular-element.component';
import { HttpOperatorsComponent } from './topics/http-operators/http-operators.component';
import { SharedModule } from './../shared-module/shared.module';
import { VsCodeExtensionComponent } from './topics/vs-code-extension/vs-code-extension.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AngularRoutingModule,
    MaterialModule
  ],
  declarations: [
    AngularIntrodComponent,
    AngularCreateAppComponent,
    AngularPlaceholderComponent,
    HttpClientComponent,
    AngularServiceComponent,
    AngularElementComponent,
    HttpOperatorsComponent,
    VsCodeExtensionComponent
  ]
})
export class AngularTutModule { }
