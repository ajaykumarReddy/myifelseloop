import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from '../../seo.service';

@Component({
  selector: 'app-rxjs-migration',
  templateUrl: './rxjs-migration.component.html',
  styleUrls: ['./rxjs-migration.component.scss']
})
export class RxjsMigrationComponent implements OnInit {

  rxjs5: string;
  rxjs6: string;
  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('Migrating Angular Apps to rxjs6 | rxjs v6 migration');
    const metaData = {
      description: 'This post will describe about the migration of Angular apps from rxjs5 to rxjs6',
      keywords: '',
      title: 'Migrating Angular Apps to rxjs6',
      website: 'https://ifelseloop.com/rxjs'
    };
    this.seoService.updateMetaTags(metaData);
  }

  ngOnInit() {
    this.rxjs5 = `
    import {Observable } from 'rxjs/Observable';
    import 'rxjs/add/operators'

    this.http.get<any>(path).map(data=>data);
    `;

    this.rxjs6 = `
  import {Observable} from 'rxjs';
  import {map} from 'rxjs/operators';
this.http.get<any>(path).pipe(
    map(data=>data)
  );
    `;
  }

}
