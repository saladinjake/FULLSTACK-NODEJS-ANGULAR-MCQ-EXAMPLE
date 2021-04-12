//needed for modularization of your code
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


//core routable  component
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';


//presentational component
import { LandingpageComponent } from './components/landingpage/landingpage.component';

import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminheaderComponent } from './components/header/adminheader/adminheader.component';
import { UserheaderComponent } from './components/header/userheader/userheader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersidebarComponent } from './components/sidebar/usersidebar/usersidebar.component';


//main layout component
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './routes/core-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ResultsComponent } from './components/results/results.component';
import { QuestionsComponent } from './components/questions/questions.component';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CoreRoutingModule,

  ],
  declarations: [
    //presentational components
    LoadingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UsersidebarComponent,

    //routable components
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    LandingpageComponent,
    QuestionFormComponent,
    ResultsComponent,
    QuestionsComponent,

    CoreComponent,


  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
