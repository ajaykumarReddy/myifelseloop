import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-hireme',
  templateUrl: './hireme.component.html',
  styleUrls: ['./hireme.component.scss']
})
export class HiremeComponent implements OnInit {

  constructor(private title: Title, private seo: SEOService) {
    this.title.setTitle('angular developer for freelance | angular developer for remote project');
  }

  ngOnInit() {
    const metaData = {
      description: `My name is Ajay kumar Chagam, I am passinate about UI side techologies like angular, react ,
      vue and java script as well java , j2ee technologies. i have been working for developed multiple remote projects successfully.`,
      keywords: `angular developer for hire, angular developer from india,
      angular developer, freelance angular developer, angular developer for freelance, angular developer for remote project work`,
      title: 'freelancer for angular developer',
      website: 'https://ifelseloop.com/hireme'
    };
    this.seo.updateMetaTags(metaData);
  }

}
