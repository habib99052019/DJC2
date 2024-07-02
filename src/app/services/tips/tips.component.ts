import { Component } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})
export class TipsComponent {
  isArabic() {
    if (localStorage.getItem("language") === "ar") {
      return true
    }
    return false
  }
}
