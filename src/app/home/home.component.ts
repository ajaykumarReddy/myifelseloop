import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { Title } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SEOService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('ifelseloop');
    this.seoService.addMetaTags();
  }

}
