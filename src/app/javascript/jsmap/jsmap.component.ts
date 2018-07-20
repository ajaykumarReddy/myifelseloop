import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from './../../seo.service';

@Component({
  selector: 'app-jsmap',
  templateUrl: './jsmap.component.html',
  styleUrls: ['./jsmap.component.scss']
})
export class JsmapComponent implements OnInit {

  createMap: string;
  methodsInMap: string;
  objectsAsKeys: string;
  iterationMap: string;
  weakMap: string;
  weakMapCode: string;
  useCases: string;
  constructor(private title: Title, private seoService: SEOService) {
    this.title.setTitle('javascript weakmap | weakmap in javascript');
    const metaData = {
      description: 'We are going explaing the how to create a weakMap in javascript and given all methods of its with examples.',
      keywords: '',
      title: 'how to use httpClient using angular',
      website: 'https://ifelseloop.com/angular/http-client'
    };
    this.seoService.updateMetaTags(metaData);
  }

  ngOnInit() {
    this.createMap = `
    const map = new Map()
    // Map {}
    const map = new Map([[5, 42], ["name", "Ajay"], ["age", 30]])
    // Map { 5 => 42, 'name' => 'Ajay', 'age' => 45 }`;

    this.methodsInMap = `
const map = new Map()
map.set(5, "Hello")
map.set("5", "World")
map.set("Ajay", "Chagam")
map.size // 3
// Map { 5 => 'Hello', '5' => 'World', 'Ajay' => 'Chagam' }

map.get(5) // Hello
map.has('5') // true
map.get('Random') // undefined because no value present for that key
map.has('Ajay') // true

map.delete('5')
map.size // 2

map.clear()
map.size // 0
// Map {}`;

    this.objectsAsKeys = `
const map = new Map()
let obj1 = {}
let obj2 = {}

map.set(obj1, 12)
map.set(obj2, "OBJECT")
map.size // 2
map.get(obj1) // 12
// Map { {} => 12, {} => 'OBJECT' }`;

    this.iterationMap = `
const map = new Map([[5, 42], ["name", "Ajay"], ["age", 30]])

map.forEach((value, key, thisMap) => {
    console.log(key => value )
    console.log(thisMap === map)
})

//5 => 42
//true

//name => Ajay
//true

//age => 30
//true`;

    this.weakMap = `
const map = new Map()
let obj1 = {}
map.set(obj1, 12)
//Map { {} => 12 }
obj1 = null // I remove the obj1 reference
// Map { {} => 12 } // But the reference still exists in the map anyway`;

    this.weakMapCode = `
const map = new WeakMap()

let obj = {} // creates a reference to obj
map.set(obj, 12) // stores the reference inside the WeakMap as a key
map.has(obj) // true
map.get(obj) // 12

obj = null /* removes the reference. Will also remove it from the WeakMap
because there are no other references to this object */

map.has(obj) // false
map.get(obj) // undefined
console.log(map) // WeakMap {}

// obj is gone from the WeakMap

`;

    this.useCases = `
const map = new WeakMap()
const element = document.querySelector(".button")

map.set(element, "Buttons")

map.get(element) // "Buttons"

element.parentNode.removeChild(element) // remove the element
element = null // removes reference

// WeakMap now empty!`;
  }


}
