import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularIntrodComponent } from './topics/angular-introd/angular-introd.component';
import { AngularCreateAppComponent } from './topics/angular-create-app/angular-create-app.component';
import { AngularPlaceholderComponent } from './topics/angular-placeholder/angular-placeholder.component';
import { HttpClientComponent } from './topics/http-client/http-client.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
