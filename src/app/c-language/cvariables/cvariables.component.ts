import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  this.externKeyword = `
  extern int a;
  extern char b;
  extern Char lat[20];
 `;

 this.withoutExtern = `
 Int a;
 Char b;
 Float c;
 `;

 this.localEx = `
 Void function1()
 {       
        Int x = 5;      //Local variable
 }
 `;

this.globalEx = `
Int x = 10;          //Global Variable
Int y = 20;         //Global variable
 Void main()
{  

    Printf("Global variable x = %d\n", x);    //accessing global variable ‘x’
    printf("Global variable y = %d\n\n", y);  //accessing global variable ‘y’
}
`;

this.staticEx = `
Void increment1()
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
    printf("Sum is : %d \n", z);

    return 0;
}
</div>`;

this.localProg = `
#include<stdio.h>
int main()

{

    int x = 50;                 //Variable declared outside the loop
    int y = 100;
    {
        int x = 20;            //Local Variable (variable declared inside the loop)
        printf("Inner variable x = %d\n", x);
    }
    printf("Outer variable x = %d\n", x);
    printf("Outer variable y = %d\n", y);
}

</div>`;

this.globalProg = `
#include<stdio.h>

int x = 50;
int y = 100;  // declaring and initializing global variables

void main()
{
{
    printf("Global variable x = %d\n", x);
    printf("Global variable y = %d\n\n", y);
}
  printf("Global variable x = %d\n", x);
  printf("Global variable y = %d\n\n", y);

}


</div>`;

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
      printf("%d, %d\n", x,y);
}

</div>`;

  }
}
