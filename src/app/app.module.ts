import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GoogleMapsModule } from '@angular/google-maps';
import { StudiesComponent } from './services/studies/studies.component';
import { TipsComponent } from './services/tips/tips.component';
import { AccompanyingComponent } from './services/accompanying/accompanying.component';
import { MediationComponent } from './services/mediation/mediation.component';
import { ArbitrationComponent } from './services/arbitration/arbitration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    StudiesComponent,
    TipsComponent,
    AccompanyingComponent,
    MediationComponent,
    ArbitrationComponent,
    AboutUsComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule, 
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }
    ),
    
    GoogleMapsModule,
  
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
