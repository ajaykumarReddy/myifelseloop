import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(private meta: Meta) {
    //this.addMetaTags();
   // meta.addTag({ name: 'description', content: 'ifelseloop is a best learing site for basics of angular and java script' });
    //meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
  }
  addMetaTags() {
    this.meta.addTags([
      { name: 'robots', content: 'INDEX, FOLLOW' },
      { name: 'author', content: 'ajaychagam' },
      { name: 'keywords', content: 'TypeScript, Angular, Java script' },
      { name: 'date', content: '2018-06-15', scheme: 'YYYY-MM-DD' },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: 'ifelseloop' },
      { property: 'og:type', content: 'https://ifelseloop.com' },
      { charset: 'UTF-8' }
    ]);
  }
  getMetaTags() {
    const metaEl: HTMLMetaElement = this.meta.getTag('name= "keywords"');
    console.log(metaEl);
    console.log(metaEl.name);
    console.log(metaEl.content);

    const els: HTMLMetaElement[] = this.meta.getTags('name');
    els.forEach(el => {
      console.log(el);
      console.log(el.name);
      console.log(el.content);
    });
  }
  updateMetaTags(metaObj: any) {
    this.meta.updateTag({ property: 'og:title', content: metaObj.title });
    this.meta.updateTag({ name: 'description', content: metaObj.description });
    this.meta.updateTag({ httpEquiv: 'Content-Type', content: 'application/json' }, 'httpEquiv= "Content-Type"');
    this.meta.updateTag({ name: 'robots', content: 'INDEX, FOLLOW' });
    this.meta.updateTag({ name: 'keywords', content: metaObj.keywords });
    this.meta.updateTag({ name: 'date', content: '2018-06-03', scheme: 'YYYY-MM-DD' });
    this.meta.updateTag({ name: 'author', content: 'ajaychagam' });
    this.meta.updateTag({ charset: 'UTF-16' }, 'charset= "UTF-8"');
    this.meta.updateTag({ property: 'og:type', content: metaObj.website });
  }
  removeMetaTags() {
    this.meta.removeTag('name = "description"');
    this.meta.removeTag('name= "keywords"');
    this.meta.removeTag('name = "viewport"');
    this.meta.removeTag('name = "robots"');

    const author: HTMLMetaElement = this.meta.getTag('name = "author"');
    this.meta.removeTagElement(author);
    const date: HTMLMetaElement = this.meta.getTag('name = "date"');
    this.meta.removeTagElement(date);
    const contentType: HTMLMetaElement = this.meta.getTag('httpEquiv = "Content-Type"');
    this.meta.removeTagElement(contentType);
    const charset: HTMLMetaElement = this.meta.getTag('charset');
    this.meta.removeTagElement(charset);
    const ogTitle: HTMLMetaElement = this.meta.getTag('property = "og:title"');
    this.meta.removeTagElement(ogTitle);
    const ogType: HTMLMetaElement = this.meta.getTag('property = "og:type"');
    this.meta.removeTagElement(ogType);
  }

}
