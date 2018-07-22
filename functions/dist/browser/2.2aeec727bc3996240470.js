(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{IYNM:function(l,e,n){"use strict";n.r(e);var a=n("CcnG"),u=function(){},t=n("pMnS"),o=n("ZYCi"),s=n("7FsN"),r=function(){function l(l){this.communicationService=l}return l.prototype.ngOnInit=function(){this.communicationService.setMenuItems([{name:"Maps",route:"/js-module"}])},l}(),p=a.La({encapsulation:0,styles:[[""]],data:{}});function i(l){return a.cb(0,[(l()(),a.Na(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a.Ma(1,212992,null,0,o.o,[o.b,a.N,a.j,[8,null],a.h],null,null)],function(l,e){l(e,1,0)},null)}var c=a.Ja("app-jsmenu",r,function(l){return a.cb(0,[(l()(),a.Na(0,0,null,null,1,"app-jsmenu",[],null,null,null,i,p)),a.Ma(1,114688,null,0,r,[s.a],null,null)],function(l,e){l(e,1,0)},null)},{},{},[]),m=n("JTLq"),h=n("JZMz"),b=n("UVEI"),d=n("9puH"),M=n("K62M"),f=function(){function l(l,e){this.title=l,this.seoService=e,this.title.setTitle("javascript weakmap | weakmap in javascript"),this.seoService.updateMetaTags({description:"We are going explaing the how to create a weakMap in javascript and given all methods of its with examples.",keywords:"",title:"how to use httpClient using angular",website:"https://ifelseloop.com/angular/http-client"})}return l.prototype.ngOnInit=function(){this.createMap="\n    const map = new Map()\n    // Map {}\n    const map = new Map([[5, 42], [\"name\", \"Ajay\"], [\"age\", 30]])\n    // Map { 5 => 42, 'name' => 'Ajay', 'age' => 45 }",this.methodsInMap="\nconst map = new Map()\nmap.set(5, \"Hello\")\nmap.set(\"5\", \"World\")\nmap.set(\"Ajay\", \"Chagam\")\nmap.size // 3\n// Map { 5 => 'Hello', '5' => 'World', 'Ajay' => 'Chagam' }\n\nmap.get(5) // Hello\nmap.has('5') // true\nmap.get('Random') // undefined because no value present for that key\nmap.has('Ajay') // true\n\nmap.delete('5')\nmap.size // 2\n\nmap.clear()\nmap.size // 0\n// Map {}",this.objectsAsKeys="\nconst map = new Map()\nlet obj1 = {}\nlet obj2 = {}\n\nmap.set(obj1, 12)\nmap.set(obj2, \"OBJECT\")\nmap.size // 2\nmap.get(obj1) // 12\n// Map { {} => 12, {} => 'OBJECT' }",this.iterationMap='\nconst map = new Map([[5, 42], ["name", "Ajay"], ["age", 30]])\n\nmap.forEach((value, key, thisMap) => {\n    console.log(key => value )\n    console.log(thisMap === map)\n})\n\n//5 => 42\n//true\n\n//name => Ajay\n//true\n\n//age => 30\n//true',this.weakMap="\nconst map = new Map()\nlet obj1 = {}\nmap.set(obj1, 12)\n//Map { {} => 12 }\nobj1 = null // I remove the obj1 reference\n// Map { {} => 12 } // But the reference still exists in the map anyway",this.weakMapCode="\nconst map = new WeakMap()\n\nlet obj = {} // creates a reference to obj\nmap.set(obj, 12) // stores the reference inside the WeakMap as a key\nmap.has(obj) // true\nmap.get(obj) // 12\n\nobj = null /* removes the reference. Will also remove it from the WeakMap\nbecause there are no other references to this object */\n\nmap.has(obj) // false\nmap.get(obj) // undefined\nconsole.log(map) // WeakMap {}\n\n// obj is gone from the WeakMap\n\n",this.useCases='\nconst map = new WeakMap()\nconst element = document.querySelector(".button")\n\nmap.set(element, "Buttons")\n\nmap.get(element) // "Buttons"\n\nelement.parentNode.removeChild(element) // remove the element\nelement = null // removes reference\n\n// WeakMap now empty!'},l}(),y=n("ZYjt"),j=a.La({encapsulation:0,styles:[[""]],data:{}});function k(l){return a.cb(0,[(l()(),a.Na(0,0,null,null,46,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),a.Na(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Maps in Javascript ES6"])),(l()(),a.Na(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,[" In Javascript es6 , there were many features introduced one of them and most usefull feature is Map. "])),(l()(),a.Na(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["A Map is an unordered list of key-values pairs where the key and the value can be of any type."])),(l()(),a.Na(7,0,null,null,2,"div",[["class","text-headline"]],null,null,null,null,null)),(l()(),a.Na(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Create Map"])),(l()(),a.Na(10,0,null,null,1,"app-pre-code",[],null,null,null,m.b,m.a)),a.Ma(11,114688,null,0,h.a,[],{code:[0,"code"]},null),(l()(),a.Na(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["In the array of arrays, each array represents a key-value pair. The first item in each array will become the key, the second will be the value. The structure may look odd, but it is the best way to make sure we can allow any type of data for keys. "])),(l()(),a.Na(14,0,null,null,2,"div",[["class","text-headline"]],null,null,null,null,null)),(l()(),a.Na(15,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Methods in Map"])),(l()(),a.Na(17,0,null,null,1,"app-pre-code",[],null,null,null,m.b,m.a)),a.Ma(18,114688,null,0,h.a,[],{code:[0,"code"]},null),(l()(),a.Na(19,0,null,null,1,"app-text-headline",[["text","Objects as key in Map"]],null,null,null,b.b,b.a)),a.Ma(20,114688,null,0,d.a,[],{text:[0,"text"]},null),(l()(),a.Na(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Objects can be used as keys in a map."])),(l()(),a.Na(23,0,null,null,1,"app-pre-code",[],null,null,null,m.b,m.a)),a.Ma(24,114688,null,0,h.a,[],{code:[0,"code"]},null),(l()(),a.Na(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["As you can see, even though we are are using two empty objects as keys, we are using the references of those objects in the map. Therefore, Object.is(), who is used for comparing the keys, returns false. Again, notice that the object are not coerced into strings."])),(l()(),a.Na(27,0,null,null,1,"app-text-headline",[["text","Iteration"]],null,null,null,b.b,b.a)),a.Ma(28,114688,null,0,d.a,[],{text:[0,"text"]},null),(l()(),a.Na(29,0,null,null,1,"app-pre-code",[],null,null,null,m.b,m.a)),a.Ma(30,114688,null,0,h.a,[],{code:[0,"code"]},null),(l()(),a.Na(31,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Weak Maps"])),(l()(),a.Na(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Weak maps obey the same principle of weak sets. In a Weak Map, every key must be an object. Weak maps are used to store weak object references. What does that mean?"])),(l()(),a.Na(35,0,null,null,1,"app-pre-code",[],null,null,null,m.b,m.a)),a.Ma(36,114688,null,0,h.a,[],{code:[0,"code"]},null),(l()(),a.Na(37,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["In this case, our object's reference still exists in the map. Removing the reference everywhere else does not remove it from the map. It is not garbage collected to free memory. In certain cases, you would want to optimize memory usage and avoid memory leaks. This is what a WeakMap does for you. If the reference of an object disappear everywhere else in your program, it will be removed from the WeakSet also."])),(l()(),a.Na(39,0,null,null,1,"app-pre-code",[],null,null,null,m.b,m.a)),a.Ma(40,114688,null,0,h.a,[],{code:[0,"code"]},null),(l()(),a.Na(41,0,null,null,1,"app-text-headline",[["text","Use cases for WeakMap"]],null,null,null,b.b,b.a)),a.Ma(42,114688,null,0,d.a,[],{text:[0,"text"]},null),(l()(),a.Na(43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["One possible use case for WeakMap could be when you are tracking DOM elements. By using a WeakMap, you could store DOM elements as keys. As soon as the element is removed, the object will be garbage collected to free memory."])),(l()(),a.Na(45,0,null,null,1,"app-pre-code",[],null,null,null,m.b,m.a)),a.Ma(46,114688,null,0,h.a,[],{code:[0,"code"]},null)],function(l,e){var n=e.component;l(e,11,0,n.createMap),l(e,18,0,n.methodsInMap),l(e,20,0,"Objects as key in Map"),l(e,24,0,n.objectsAsKeys),l(e,28,0,"Iteration"),l(e,30,0,n.iterationMap),l(e,36,0,n.weakMap),l(e,40,0,n.weakMapCode),l(e,42,0,"Use cases for WeakMap"),l(e,46,0,n.useCases)},null)}var w=a.Ja("app-jsmap",f,function(l){return a.cb(0,[(l()(),a.Na(0,0,null,null,1,"app-jsmap",[],null,null,null,k,j)),a.Ma(1,114688,null,0,f,[y.i,M.a],null,null)],function(l,e){l(e,1,0)},null)},{},{},[]),g=n("Dk7Y"),v=function(){};n.d(e,"JavaScriptModuleNgFactory",function(){return N});var N=a.Ka(u,[],function(l){return a.Ua([a.Va(512,a.j,a.Aa,[[8,[t.a,c,w]],[3,a.j],a.v]),a.Va(1073742336,g.a,g.a,[]),a.Va(1073742336,o.n,o.n,[[2,o.t],[2,o.k]]),a.Va(1073742336,v,v,[]),a.Va(1073742336,u,u,[]),a.Va(1024,o.i,function(){return[[{path:"",component:r,children:[{path:"",component:f}]}]]},[])])})}}]);