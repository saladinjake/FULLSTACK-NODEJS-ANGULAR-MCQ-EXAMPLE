import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/components/login/login.component'
import { APP_ROUTES } from './core/routes/core.routes';



@NgModule({
   imports: [
      RouterModule,
      RouterModule.forRoot(APP_ROUTES)
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
