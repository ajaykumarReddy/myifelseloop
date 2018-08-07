import { Component, OnInit } from '@angular/core';
import { Title } from '../../../../node_modules/@angular/platform-browser';
import { SEOService } from '../../seo.service';

@Component({
  selector: 'app-c-keywords',
  templateUrl: './c-keywords.component.html',
  styleUrls: ['./c-keywords.component.scss']
})
export class CKeywordsComponent implements OnInit {

  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('Keywords and Identifiers in C Language');
    const metaData = {
        description: `Here you can get all 32 keywords in C language and identifiers in C language with examples. And also the character set used in C programming, special characters, digits and white space characters.`,
        keywords: 'keywords in C Language, keywords and identifiers in C, character set in C ',
        title: 'Keywords and Identifiers in C Language',
        website: 'https://ifelseloop.com/c-programming/c-keywords-identifiers'
    };
    this.seoService.updateMetaTags(metaData);
}

  ngOnInit() {
  }

}
