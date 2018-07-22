
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsMenuComponent } from './rxjs-menu/rxjs-menu.component';
import { RxjsMigrationComponent } from './rxjs-migration/rxjs-migration.component';

const routes: Routes = [
  {
    path: '', component: RxjsMenuComponent,
    children: [{
      path: '',
      component: RxjsMigrationComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule { }
