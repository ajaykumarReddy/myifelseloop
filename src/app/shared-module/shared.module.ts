
import { NgModule } from '@angular/core';
import { PreCodeComponent } from './pre.code.component';
import { TextHeadLineComponent } from './text.headline.component';
import { HighlightModule } from 'ngx-highlightjs';


@NgModule({
  imports: [HighlightModule],
  exports: [PreCodeComponent, TextHeadLineComponent],
  declarations: [PreCodeComponent, TextHeadLineComponent],
  providers: [],
})
export class SharedModule { }
