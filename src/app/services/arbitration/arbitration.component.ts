import { Component } from '@angular/core';

@Component({
  selector: 'app-arbitration',
  templateUrl: './arbitration.component.html',
  styleUrl: './arbitration.component.css'
})
export class ArbitrationComponent {
  isArabic() {
    if (localStorage.getItem("language") === "ar") {
      return true
    }
    return false
  }
}
