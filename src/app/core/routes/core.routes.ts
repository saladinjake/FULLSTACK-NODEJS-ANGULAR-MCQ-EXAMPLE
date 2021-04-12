import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

import { CoreComponent } from '../core.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoadingComponent } from '../components/loading/loading.component';


import { QuestionFormComponent } from '../components/question-form/question-form.component';
import { ResultsComponent } from '../components/results/results.component';
import { QuestionsComponent } from '../components/questions/questions.component';

import { RoomComponent } from '../components/room/room.component';
import { RoomIndexComponent } from '../components/roomindex/roomindex.component';

export const APP_ROUTES : Routes = [


        { path: '', redirectTo: 'signin', pathMatch: 'full' },
        { path: 'dashboard',  component: LandingpageComponent },
      { path: 'signin', component: LoginComponent},
      { path: 'signup', component: RegisterComponent},
      { path: 'test:id', component: QuestionsComponent},
    //  { path: '**', component: PageNotFoundComponent}
      {path: 'chat', component: RoomIndexComponent },
      {path: 'chat:roomId', component: RoomComponent}

];
