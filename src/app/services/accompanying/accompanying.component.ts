import { Component } from '@angular/core';

@Component({
  selector: 'app-accompanying',
  templateUrl: './accompanying.component.html',
  styleUrl: './accompanying.component.css'
})
export class AccompanyingComponent {
  isArabic() {
    if (localStorage.getItem("language") === "ar") {
      return true
    }
    return false
  }
}
