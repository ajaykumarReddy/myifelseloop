import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cconstants',
  templateUrl: './cconstants.component.html',
  styleUrls: ['./cconstants.component.scss']
})
export class CconstantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.polyfill = `
   786
   +345
   -9870
   -3000
`;

this.float = `
+ 4332
436.0
-34.45
-48.6785
`;

this.exponent = `
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
