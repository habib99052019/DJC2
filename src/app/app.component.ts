import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'DJS';

  
  constructor(private translateService : TranslateService){

    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('language')||'en');
    
  }


  scrollToTop(){

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }

  
}
