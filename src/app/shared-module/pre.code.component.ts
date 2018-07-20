import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pre-code',
  template: `<pre class="pre-text">
        <code [innerHTML]="code"></code>
      </pre>`
})

export class PreCodeComponent implements OnInit {
  @Input() code: string;
  constructor() { }

  ngOnInit() { }
}
