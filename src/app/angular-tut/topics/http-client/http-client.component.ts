import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../../seo.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  httpClinetCode: string;
  httpServiceCode: string;
  httpGetCall: string;
  httpPostCall: string;
  httpHeaders: string;
  httpDelete: string;
  httpPutCall: string;
  constructor(private seoService: SEOService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('angular httpClient');
    // const metaData = {
    //   description: 'we will get to know about how to use httpClient and basic setup and we will get know the example code',
    //   keywords: 'httpClient, how to use httpClient using angular',
    //   title: 'how to use httpClient using angular',
    //   website: 'https://ifelseloop.com/angular/httpClient'
    // };
    // this.seoService.updateMetaTags(metaData);
    this.httpClinetCode = `
    import { NgModule } from '@angular/core';
    import { BrowserModule }    from '@angular/platform-browser';
    import { HttpClientModule } from '@angular/common/http';

    @NgModule({
      imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule {}`;

    this.httpServiceCode = `
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Injectable()
    export class HttpService {
      constructor(private http: HttpClient) { }
    }`;

    this.httpGetCall = `
    getConfig() {
      return this.http.get(url); // url, you would like to replace with your custom url.
    }`;

    this.httpPostCall = `
  addItem(hero: any): Observable<any> {  // return type should be strictly Observable of any type.
    return this.http.post<any>(this.url, item, httpOptions);
  }`;

    this.httpHeaders = `
  import { HttpHeaders } from '@angular/common/http';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };`;

    this.httpDelete = `
    deleteItem(id: number): Observable<{}> {
      const url = url/3; // DELETE api/items/42
      return this.http.delete(url, httpOptions)
        .pipe(
          catchError(this.handleError('deleteHero'))
        );
    }`;

    this.httpPutCall = `
    updateItem(item: any): Observable<any> {
      return this.http.put<any>(this.heroesUrl, hero, httpOptions)
        .pipe(
          catchError(this.handleError('updateHero', hero))
        );
    }`;
  }

}
