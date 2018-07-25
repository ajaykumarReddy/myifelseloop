import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from '../../seo.service';

@Component({
  selector: 'app-cconstants',
  templateUrl: './cconstants.component.html',
  styleUrls: ['./cconstants.component.scss']
})
export class CconstantsComponent implements OnInit {
  polyfillData: string;
  floatData: string;
  exponentData: string;
  singleQuote: string;
  charConst: string;
  stringConst: string;
  defConst: string;
  define: string;
  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('Constants in C with Examples');
    const metaData = {
      description: 'In this guide, you will get more details about constant in C program, types of constants and how to define a constant in C program with syntax and examples here.',
      keywords: 'constants in C, C program constants, Types of constants with examples ',
      title: 'Constants in C with Example',
      website: 'https://ifelseloop.com/c-programming/constants-in-c'
    };
    this.seoService.updateMetaTags(metaData);
  }

  ngOnInit() {
    this.polyfillData = `
   786
   +345
   -9870
   -3000
`;

    this.floatData = `
+ 4332
436.0
-34.45
-48.6785
`;

    this.exponentData = `
+4.3e-5
4.2e8
-0.4E+3
-5.4e-5`;

    this.singleQuote = `
Example: 'A'`;

    this.charConst = `
‘A’
‘I’
‘5’
‘=’`;

    this.stringConst = `
“hello”        //string constant
“123”          //string constant
“        “     //string constant with eight white spaces`;

    this.defConst = `
const int a = 10;`;

    this.define = `
#define a 10 `;
  }
}
