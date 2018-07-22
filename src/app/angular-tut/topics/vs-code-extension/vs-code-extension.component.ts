import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from '../../../seo.service';

@Component({
  selector: 'app-vs-code-extension',
  templateUrl: './vs-code-extension.component.html',
  styleUrls: ['./vs-code-extension.component.scss']
})
export class VsCodeExtensionComponent implements OnInit {
  json2Interface: string;
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
    this.json2Interface = `
    {key: 'hello', name: 'ajay', spdx_id: 'world', 'url': 'my website', node_id: 1234}
    // this json will be converted to Interface when you type ctrl+Alt+v

    export interface License {
      key: string;
      name: string;
      spdx_id: string;
      url: string;y[]
      node_id: number;
    }`;
  }

}
