

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-headline',
  template: `
<div class="text-headline">
  <strong>{{text}}</strong>
</div>
  `
})

export class TextHeadLineComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() { }
}
