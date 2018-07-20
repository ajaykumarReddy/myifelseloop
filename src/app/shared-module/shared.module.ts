
import { NgModule } from '@angular/core';
import { PreCodeComponent } from './pre.code.component';
import { TextHeadLineComponent } from './text.headline.component';


@NgModule({
  imports: [],
  exports: [PreCodeComponent, TextHeadLineComponent],
  declarations: [PreCodeComponent, TextHeadLineComponent],
  providers: [],
})
export class SharedModule { }
