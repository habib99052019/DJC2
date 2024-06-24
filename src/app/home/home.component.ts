import { Component, Input } from '@angular/core';

declare var $ :any

interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  slides = [

    { img: 'assets/images/carousel/carousel11.jpg' },
    { img: 'assets/images/carousel/carousel13.jpg' },
    { img: 'assets/images/carousel/carousel14.jpg'},
    { img: 'assets/images/carousel/carousel15.jpg'}
  
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1,autoplay:true,autoplaySpeed:2000,dots:true};


 
    
    
  

}
