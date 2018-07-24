
import { NgModule } from '@angular/core';
import { QuestionsMenuComponent } from './questions-menu/questions-menu.component';
import { CommonModule } from '@angular/common';
import { InterviewRoutingModule } from './interview-questions.routing';
import { CQuestionsComponent } from './c-questions/c-questions.component';

@NgModule({
  imports: [CommonModule,
    InterviewRoutingModule],
  exports: [],
  declarations: [QuestionsMenuComponent, CQuestionsComponent],
  providers: [],
})
export class InterviewQuestionsModule { }
