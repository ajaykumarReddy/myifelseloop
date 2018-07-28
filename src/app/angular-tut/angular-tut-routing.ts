import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularIntrodComponent } from './topics/angular-introd/angular-introd.component';
import { AngularCreateAppComponent } from './topics/angular-create-app/angular-create-app.component';
import { AngularPlaceholderComponent } from './topics/angular-placeholder/angular-placeholder.component';
import { HttpClientComponent } from './topics/http-client/http-client.component';
import { AngularServiceComponent } from './topics/angular-service/angular-service.component';
import { AngularElementComponent } from './topics/angular-element/angular-element.component';
import { HttpOperatorsComponent } from './topics/http-operators/http-operators.component';
import { Angular6FeaturesComponent } from './topics/angular1.6-features/angular1.6-features.component';
import { VsCodeExtensionComponent } from './topics/vs-code-extension/vs-code-extension.component';
import { KeyValuePipeComponent } from './topics/key-value-pipe/key-value-pipe.component';
const routes: Routes = [
  {
    path: '',
    component: AngularPlaceholderComponent,
    children: [
      {
        path: '',
        component: AngularIntrodComponent
      },
      {
        path: 'create-angular-app',
        component: AngularCreateAppComponent
      },
      {
        path: 'http-client',
        component: HttpClientComponent
      },
      {
        path: 'http-service',
        component: AngularServiceComponent
      },
      {
        path: 'angular-element',
        component: AngularElementComponent
      },
      {
        path: 'http-operators',
        component: HttpOperatorsComponent
      },
      {
        path: 'vs-code-ext',
        component: VsCodeExtensionComponent
      },
      {
        path: 'angularv6.1-features',
        component: Angular6FeaturesComponent
      },
      {
        path: 'keyvalue',
        component: KeyValuePipeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
