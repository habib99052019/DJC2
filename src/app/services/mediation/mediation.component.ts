import { Component } from '@angular/core';

@Component({
  selector: 'app-mediation',
  templateUrl: './mediation.component.html',
  styleUrl: './mediation.component.css'
})
export class MediationComponent {
  isArabic() {
    if (localStorage.getItem("language") === "ar") {
      return true
    }
    return false
  }
}
