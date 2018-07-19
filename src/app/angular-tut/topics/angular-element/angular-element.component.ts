import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from '../../../seo.service';
@Component({
  selector: 'app-angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: ['./angular-element.component.scss']
})
export class AngularElementComponent implements OnInit {

  polyfill: string;
  componentElm: string;
  componentDeclar: string;
  elementsCode: string;
  html_element_code: string;
  buildsScript: string;
  addCustomElem: string;
  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('how to create angular elements');
    this.html_element_code = `
    <app-hello wish="Hello World"></app-hello>`;

    const metaData = {
      description: 'we will get to know how to create angular application and run with server in easy and simple steps',
      title: 'How to Create Angular Application',
      website: 'https://ifelseloop.com/angular/create-angular-app'
    };
    this.seoService.updateMetaTags(metaData);
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
 import { HelloComponent } from './hello.component';

 @NgModule({
     declarations: [
         HelloComponent
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

    this.elementsCode = `
    import { NgModule, Injector } from '@angular/core';
    import { createCustomElement } from '@angular/elements';
    import { SEOService } from './../../../seo.service';
export class AppModule {
      constructor(private injector: Injector) {
          const customElement = createCustomElement(MessageComponent, { injector });
          customElements.define('app-hello', customElement);
      }
      ngDoBootstrap() {
      }
  }`;

    this.buildsScript = `
  "build": "ng build --prod --output-hashing=none",
  "package":"cat dist/{runtime,polyfills,scripts,main}.js
           | gzip > hello-element.js.gz"`;

    this.addCustomElem = `
           <app-hello wish='Hello World'></app-hello>
           `;

  }



}
