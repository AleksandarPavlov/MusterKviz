import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
{path: 'landingPage', component: LandingPageComponent},
{path: 'questions', component: QuestionsComponent},
{path: 'results/:i', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
