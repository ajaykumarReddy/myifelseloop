import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { Title } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SEOService, private title: Title) {
    this.title.setTitle('ifelseloop tutorials | A tutorial site for all languages');
    const metaData = {
      description: `Ifelseloop is a start up tutorial site for javascript, angular,
      react, vue , RXJS, c , c++ and java, which will help
      software developers to code better way by presenting the topics in very simply explained manner`,
      keywords: '',
      title: `A tutorial for angular, react, vue , RXJS, c , c++ and java`,
      website: 'https://ifelseloop.com/'
    };
    this.seoService.updateMetaTags(metaData);
  }

  ngOnInit() {
  }

}
