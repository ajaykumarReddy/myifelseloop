
import { NgModule } from '@angular/core';
import { JavaScriptRoutingModule } from './javascript.routing';
import { JsmenuComponent } from './jsmenu/jsmenu.component';
import { JsmapComponent } from './jsmap/jsmap.component';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  imports: [SharedModule, JavaScriptRoutingModule],
  exports: [],
  declarations: [JsmenuComponent, JsmapComponent],
  providers: [],
})
export class JavaScriptModule { }
