import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


//import modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//import custom modules
import { CoreModule } from './core/core.module';

//Admin module




import { AppComponent } from './app.component';



const IMPORTED_MODULES = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,


  CoreModule,


];


@NgModule({
  declarations: [AppComponent,
   ],
  imports: [...IMPORTED_MODULES],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
