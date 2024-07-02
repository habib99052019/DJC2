import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  lang: string = '';

  icon = "/assets/images/en.png"

  constructor(private translateService: TranslateService, private router: Router) { }

  isArabic() {
    if (localStorage.getItem("language") === "ar") {
      return true
    }
    return false
  }

  ChangeLanguage(language: any) {

    const selectedLanguage = language.target.value;

    this.icon = "/assets/images/" + selectedLanguage + ".png"

    localStorage.setItem('language', selectedLanguage);

    this.translateService.use(selectedLanguage);

  }

  checkRoute(route: any) {

    if (this.router.url.split("/")[1] === route) {
      return "red"
    } else {
      return "black"
    }


  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en';

    this.icon = "/assets/images/" + this.lang + ".png"

  }


}
