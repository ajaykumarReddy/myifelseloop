import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from '../../../seo.service';

@Component({
  selector: 'app-angular-service',
  templateUrl: './angular-service.component.html',
  styleUrls: ['./angular-service.component.scss']
})
export class AngularServiceComponent implements OnInit {
  angularService: string;
  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('creating angular services');
    const metaData = {
      description: 'We will get to know all about how to create angular services and basic syntax and how to make all AJAX calls.',
      title: 'how to create angular services',
      website: 'https://ifelseloop.com/angular/http-service'
    };
    this.seoService.updateMetaTags(metaData);
  }

  ngOnInit() {
    this.angularService = `
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  constructor() { }

}`;
  }

}
