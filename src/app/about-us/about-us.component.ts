import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  isArabic(){
    if(localStorage.getItem("language")==="ar"){
      return true
    }
    return false
  }

}
