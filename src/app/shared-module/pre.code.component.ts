import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
@Component({
  selector: 'app-pre-code',
  template: `
  <pre><code highlight [textContent]="code" (highlighted)="onHighlight($event)"></code></pre>
  `
})

export class PreCodeComponent implements OnInit {
  @Input() code: string;
  response: HighlightResult;
  constructor() { }

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }
  ngOnInit() { }
}
