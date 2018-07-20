
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsmenuComponent } from './jsmenu/jsmenu.component';
import { JsmapComponent } from './jsmap/jsmap.component';

const routes: Routes = [
  {
    path: '', component: JsmenuComponent,
    children: [{
      path: '',
      component: JsmapComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavaScriptRoutingModule { }
