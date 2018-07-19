import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from './../../../seo.service';

@Component({
  selector: 'app-angular-create-app',
  templateUrl: './angular-create-app.component.html',
  styleUrls: ['./angular-create-app.component.scss']
})
export class AngularCreateAppComponent implements OnInit {

  constructor(private title: Title, private seoService: SEOService) { }

  ngOnInit() {
    this.title.setTitle('How to Create Angular Application');
    const metaData = {
      description: 'we will get to know how to create angular application and run with server in easy and simple steps',
      title: 'How to Create Angular Application',
      website: 'https://ifelseloop.com/angular/create-angular-app'
    };
    this.seoService.updateMetaTags(metaData);
  }

}
