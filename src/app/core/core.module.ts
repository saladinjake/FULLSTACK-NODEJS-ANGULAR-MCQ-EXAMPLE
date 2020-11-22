//needed for modularization of your code
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


//core routable  component
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { IdlestateComponent } from './components/idlestate/idlestate.component';


//presentational component
import { LandingpageComponent } from './components/landingpage/landingpage.component';

import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminheaderComponent } from './components/header/adminheader/adminheader.component';
import { UserheaderComponent } from './components/header/userheader/userheader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersidebarComponent } from './components/sidebar/usersidebar/usersidebar.component';
import { AdminsidebarComponent } from './components/sidebar/adminsidebar/adminsidebar.component';
//widgets component
import { WidgetsComponent } from './components/widgets/widgets.component';
import { VideoComponent } from './components/widgets/video/video.component';
import { ImagesComponent } from './components/widgets/images/images.component';
import { BannersComponent } from './components/widgets/banners/banners.component';
import { GalleryComponent } from './components/widgets/gallery/gallery.component';
import { CarouselComponent } from './components/widgets/carousel/carousel.component';
import { ModalComponent } from './components/widgets/modal/modal.component';
import { ProductComponent } from './components/widgets/product/product.component';
import { CardboxComponent } from './components/widgets/cardbox/cardbox.component';


//main layout component
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './routes/core-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    WidgetsComponent,
    VideoComponent,
    ImagesComponent,
    BannersComponent,
    UsersidebarComponent,
    AdminsidebarComponent,
    AdminheaderComponent,
    UserheaderComponent,
    GalleryComponent,
    CarouselComponent,
    ModalComponent,
    ProductComponent,
    CardboxComponent,

    //routable components
  
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent,
    IdlestateComponent,

    CoreComponent,

    LandingpageComponent,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
