import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: ['./angular-element.component.scss']
})
export class AngularElementComponent implements OnInit {

  polyfill: string;
  componentElm: string;
  componentDeclar: string;
  constructor(private title: Title) {
    this.title.setTitle('how to create angular elements');
  }

  ngOnInit() {
    this.polyfill = `
    import '@webcomponents/custom-elements/src/native-shim';
    import '@webcomponents/custom-elements/custom-elements.min';`;

    this.componentElm = `import { Component, Input } from '@angular/core';
    @Component({
        selector: 'app-hello',
        template:  <span>Angular Elements-{{wish}}</span>,
    })
    export class HelloComponent {
        title = 'Angular Elements';
        @Input() wish: string;
    };`;

    this.componentDeclar = `
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { MessageComponent } from './message.component';

 @NgModule({
     declarations: [
         MessageComponent
     ],
     imports: [
         BrowserModule
     ],
     providers: [],
     bootstrap: [],
     entryComponents: [HelloComponent]
 })
 export class AppModule {

 }`;
  }



}
