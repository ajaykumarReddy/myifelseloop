import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SEOService } from './../../../seo.service';
import sdk from '@stackblitz/sdk';
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-http-operators',
  templateUrl: './http-operators.component.html',
  styleUrls: ['./http-operators.component.scss']
})
export class HttpOperatorsComponent implements OnInit, AfterViewInit {
  myhttpclient: string;
  httpOperators: string;
  httpMap: string;
  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('angular http operators | angular e');
    const metaData = {
      description: `Angular Http Operators shareAndCache and keepFresh are the great way to cahe the services data once and keep
      it in cache and then shared across all the applications.`,
      title: 'Angular http operators shareAndCache, keepFresh ',
      website: 'https://ifelseloop.com/angular/http-operators'
    };
    this.seoService.updateMetaTags(metaData);
  }

  ngOnInit() {
    this.myhttpclient = `
    import { HttpClientModule } from '@angular/common/http';

    imports: [
        BrowserModule,
        HttpClientModule
      ]`;

    this.httpOperators = `
    import { keepFresh, shareAndCache, retryExponentialBackoff } from 'http-operators';
    repos;
    constructor(private http: HttpClient) {
    const path = https://api.github.com/search/repositories?q=angular;
    this.repos = this.http.get<any>(path).pipe(
      map(res => res.items),
      retryExponentialBackoff(3, 1000),
      keepFresh(10 * 1000),
      shareAndCache('myapp-repos'),
    );
  }`;

    this.httpMap = `
    import { HttpClient } from '@angular/common/http';
    import { map } from 'rxjs/operators';
constructor(private http: HttpClient) {}
    this.http.get<any>(path).pipe(
      map(res => res.items),
    );
  `;
  }

  ngAfterViewInit() {
    sdk.embedGithubProject(
      'myDiv',
      'ajaykumarReddy/http-operators',
      { height: 350 }
    );
  }

}
