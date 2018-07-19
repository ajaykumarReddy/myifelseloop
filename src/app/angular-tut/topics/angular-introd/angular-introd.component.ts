import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SEOService } from '../../../seo.service';

@Component({
  selector: 'app-angular-introd',
  templateUrl: './angular-introd.component.html',
  styleUrls: ['./angular-introd.component.scss'],
})
export class AngularIntrodComponent implements OnInit {

  constructor(private router: Router, private title: Title, private seoService: SEOService) {
    this.title.setTitle('angular introduction');
    const metaData = {
      description: 'In this post we will get to know all about angular introducion and features and then how to get start a angular app',
      title: 'angular introduction and features',
      website: 'https://ifelseloop.com/angular/'
    };
    this.seoService.updateMetaTags(metaData);
  }

  ngOnInit() { }

  getStart() {
    this.router.navigate(['/angular/createAngularApp']);
  }

}
