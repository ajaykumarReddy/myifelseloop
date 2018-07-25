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
  section1: string;
  section2: string;
  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('vscode extensions for angular apps | vscode extension');
    const metaData = {
      description: 'This post will describe about the all neccessary and helpfull vscode extension for angular apps.',
      keywords: '',
      title: 'vscode extensions for angular apps',
      website: 'https://ifelseloop.com/angular/vs-code-ext'
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

    this.section1 = `
#include<stdio.h>

int main(){
    const int a = 10;
    printf("The value of ‘a’ is: %i",a);
    return 0;
}

</div>`;

    this.section2 = `
#include<stdio.h>
#define a 10

int main()
{
    printf("value of a is : %i",a);
    return 0;
}
</div>`;
  }
}
