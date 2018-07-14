import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  imports: [
    MatCardModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule
  ],
})
export class MaterialModule { }
