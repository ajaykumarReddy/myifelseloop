import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material_module/material.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppRoutingModule } from './app.router.module';
import { HomeComponent } from './home/home.component';
import { CommunicationService } from './comunication.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent
  ],
  imports: [
  CommonModule,
    NgtUniversalModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [CommunicationService],
})
export class AppModule { }
