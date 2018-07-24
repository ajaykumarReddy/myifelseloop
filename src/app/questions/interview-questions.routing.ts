
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsMenuComponent } from './questions-menu/questions-menu.component';
import { CQuestionsComponent } from './c-questions/c-questions.component';

const routes: Routes = [
  {
    path: '', component: QuestionsMenuComponent,
    children: [{
      path: '',
      component: CQuestionsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewRoutingModule { }
