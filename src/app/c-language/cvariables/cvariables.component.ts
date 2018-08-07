import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../seo.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-cvariables',
    templateUrl: './cvariables.component.html',
    styleUrls: ['./cvariables.component.scss']
})
export class CvariablesComponent implements OnInit {
    externKeyword: string;
    withoutExtern: string;
    variab1: string;
    localEx: string;
    localProg: string;
    globalEx: string;
    globalProg: string;
    staticEx: string;
    staticProg: string;
    constructor(private title: Title, private seoService: SEOService) {
        this.title.setTitle('Variables in C Language | Local, Global and Static Variables');
        const metaData = {
            description: `C variables – Get the complete details of variables in C, rules for creating C variables, declaring, defining and initialization of a variable in a program and types of variables in C language with examples.`,
            keywords: 'variables in C, C program variables, Types of variables with examples ',
            title: 'Variables in C Language | Local, Global and Static Variables',
            website: 'https://ifelseloop.com/c-programming/variables-in-c'
        };
        this.seoService.updateMetaTags(metaData);
    }


    ngOnInit() {
        this.externKeyword = `
  extern int a;
  extern char b;
  extern char last[20];
 `;

        this.withoutExtern = `
 int a;
 char b;
 float c;
 `;

        this.localEx = `
 void function1()
 {
        int x = 5;      //Local variable
 }
 `;

        this.globalEx = `
int x = 10;          //Global Variable
int y = 20;         //Global variable
 void main()
{

    printf("Global variable x = %d", x);    //accessing global variable ‘x’
    printf("Global variable y = %d", y);  //accessing global variable ‘y’
}
`;

        this.staticEx = `
void increment1()
{
      Int x = 10;      	          // Local Variable
      Static int y = 30;          //Static Variables
      x = x + 1;
      y = y + 1;
      printf("%d, %d\n", x,y);
}

`;


        this.variab1 = `
#include <stdio.h>
extern int x, y;             // Variable declaration using 'extern' Keyword(optional)
extern int z;
int main () {
    int x, y, z;            /* variable definition: */
      x = 10;               /* actual initialization */
      y = 20;
      z = x + y;
    printf("Sum is : %d", z);

    return 0;
}
`;

        this.localProg = `
#include<stdio.h>
int main()

{

    int x = 50;                 //Variable declared outside the loop
    int y = 100;
    {
       int x = 20;            //Local Variable (variable declared inside the loop)
       printf("Inner variable x = %d ", x);
    }
    printf("Outer variable x = %d", x);
    printf("Outer variable y = %d", y);
}

`;

        this.globalProg = `
#include<stdio.h>

int x = 50;
int y = 100;  // declaring and initializing global variables

void main()
{
{
    printf("Global variable x = %d", x);
    printf("Global variable y = %d", y);
}
  printf("Global variable x = %d", x);
  printf("Global variable y = %d", y);

}

`;

        this.staticProg = `
#include<stdio.h>

int main()
{
    increment1();
    increment1();
    increment1();
    increment1();
    increment1();
    increment1();
}

void increment1()
{
      int x = 10;      	// Local Variable
      static int y = 30;          //Static Variables
      x = x + 1;
      y = y + 1;
      printf("%d, %d", x,y);
}
`;

    }
}
