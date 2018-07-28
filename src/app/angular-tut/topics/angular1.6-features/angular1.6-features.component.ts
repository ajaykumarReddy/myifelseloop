import { Component, OnInit, AfterViewInit } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { Title } from '@angular/platform-browser';
import { SEOService } from './../../../seo.service';

@Component({
  selector: 'app-angular1.6-features',
  templateUrl: './angular1.6-features.component.html',
  styleUrls: ['./angular1.6-features.component.scss']
})
export class Angular6FeaturesComponent implements OnInit, AfterViewInit {

  code1: string;

  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('angular v6 new features | angular scrollPositionRestoration ');
    const metaData = {
      description: `Angular has introduced new feature called scrollPositionRestoration so that developers now can easly
      configure and restore the previsous page scroll posotion when we navigating
      from one route page to another router`,
      title: 'Angular 6.1 new features with examples',
      website: 'https://ifelseloop.com/angular/angularv6.1-features'
    };
    this.seoService.updateMetaTags(metaData);
  }


  ngOnInit() {
    this.code1 = `
    @Component({
      templateUrl: './my-component.html',
      encapsulation: ViewEncapsulation.ShadowDom
    })
    export class MyComponent { }`;
  }

  ngAfterViewInit() {
    sdk.embedGithubProject(
      'myScroll',
      'ajaykumarReddy/restorepreviousscrollposition',
      { height: 350 }
    );
  }



}
