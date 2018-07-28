import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from './../../../seo.service';

@Component({
  selector: 'app-key-value-pipe',
  templateUrl: './key-value-pipe.component.html',
  styleUrls: ['./key-value-pipe.component.scss']
})
export class KeyValuePipeComponent implements OnInit {

  objCode: string;
  mapCode: string;
  sampleCode: string;
  orderCode: string;
  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('angular kayvalue pipe | iterate objects and maps in angular');
    const metaData = {
      description: `Angular has a new pipe operator called keyvalue to iterate through objects and maps`,
      title: 'how to iterate objects and maps in angular',
      website: 'https://ifelseloop.com/angular/keyvalue'
    };
    this.seoService.updateMetaTags(metaData);
  }


  ngOnInit() {
    this.objCode = `@Component({
      template: '
        <h1>Object</h1>
        <div *ngFor="let row of rows | keyvalue">
          {{ row | json }}
          {{row.key}}: {{row.value}}
        </div>
      '
    })
    export class AppComponent {
      rows = {
        a: 1,
        b: 2
      }
    }`;

    this.mapCode = `
    @Component({
      template: '
        <h1>Map</h1>
        <div *ngFor="let row of rowsMap | keyvalue">
          {{ row | json }}
          {{row.key}}: {{row.value}}
        </div>
      '
    })
    export class AppComponent {
      rowsMap = new Map([['a', 1], ['b', 2]]);
    }`;

    this.sampleCode = `
const input = { b: 1, a: 1 };
const output = [ { key: 'a', value: 1 }, { key: 'b', value: 2} ]

const input = { 2: 1, 1: 1 };
const output = [ { key: '1', value: 1 }, { key: '2', value: 2} ];`;
    this.orderCode = `
@Component({
  template: '
    <div *ngFor="let row of rows | keyvalue: compareFn">
      {{ row | json }}
      {{row.key}}: {{row.value}}
    </div>
  '
})
export class AppComponent {
  rows = {
    a: 1,
    b: 2
  }

  compareFn = (a, b) => ...
}`;

  }



}
