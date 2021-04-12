import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

import { CoreComponent } from '../core.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoadingComponent } from '../components/loading/loading.component';

import { QuestionFormComponent } from '../components/question-form/question-form.component';
import { ResultsComponent } from '../components/results/results.component';
import { QuestionsComponent } from '../components/questions/questions.component';


export const coreRoutes: Routes = [

      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'welcome',  component: LandingpageComponent },
      { path: 'signin', component: LoginComponent},
      { path: 'signup', component: RegisterComponent},
      { path: ':id', component: QuestionsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
