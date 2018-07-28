import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material_module/material.module';
import { HighlightModule, HighlightOptions } from 'ngx-highlightjs';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppRoutingModule } from './app.router.module';
import { HomeComponent } from './home/home.component';
import { CommunicationService } from './comunication.service';
import { HiremeComponent } from './hireme/hireme.component';

const options: HighlightOptions = {
  theme: 'agate',
  path: '../highlight.min.js'
 };

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    HiremeComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    MaterialModule,
    AppRoutingModule,
    HighlightModule.forRoot({ theme: 'default' }),
  ],
  providers: [CommunicationService],
})
export class AppModule { }
