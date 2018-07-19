import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../seo.service';
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-cintroduction',
  templateUrl: './cintroduction.component.html',
  styleUrls: ['./cintroduction.component.scss']
})
export class CintroductionComponent implements OnInit {

  constructor(private seoService: SEOService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('C Language Introduction (2018) | C Programming Tutorials');
    const metaData = {
      description: 'This C language tutorial guide will give you everything you need about C introduction, features, uses of C in various applications along with setting up compiling and running of a C program on your Computer.',
      keywords: 'C Language, C programming tutorials, C tutorials for bigenners',
      title: 'C Language Introduction (2018) | C Programming Tutorials',
      website: 'https://ifelseloop.com/c-programming'
    };
    this.seoService.updateMetaTags(metaData);
  }

}
