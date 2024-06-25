import { Component, Input , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
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
 
  act="slide-content"
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }
  slides = [

    { img: 'assets/images/carousel/carousel11.jpg' },
    { img: 'assets/images/carousel/carousel13.jpg' },
    { img: 'assets/images/carousel/carousel14.jpg'},
    { img: 'assets/images/carousel/carousel15.jpg'}
  
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1,autoplay:true,autoplaySpeed:5000,dots:true };
  ngOnInit() {

    
  }

 
    
  
  

}
