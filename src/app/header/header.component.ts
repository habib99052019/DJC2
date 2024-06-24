import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  lang:string ='';

  constructor(private translateService : TranslateService){
    
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'fr';
    
  }

  ChangeLanguage(language:any){

    const selectedLanguage = language.target.value;

    localStorage.setItem('language',selectedLanguage);

    this.translateService.use(selectedLanguage);

  }


}
