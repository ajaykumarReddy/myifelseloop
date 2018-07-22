
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs.routing';
import { RxjsMigrationComponent } from './rxjs-migration/rxjs-migration.component';
import { RxjsMenuComponent } from './rxjs-menu/rxjs-menu.component';
import { SharedModule } from './../shared-module/shared.module';


@NgModule({
  imports: [CommonModule, RxjsRoutingModule, SharedModule],
  exports: [],
  declarations: [RxjsMigrationComponent, RxjsMenuComponent],
  providers: [],
})
export class RxjsModule { }
