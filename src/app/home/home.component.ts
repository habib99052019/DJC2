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

  
  activeSlide = 0

  showActivatedSlide(index: any) {

    const container: any = document.querySelector(".cs-custom-slider")
    const containerMobile: any = document.querySelector(".cs-custom-slider-mobile")

    this.activeSlide = index

    var nodes = container.childNodes

    for (let i = 0; i < nodes.length - 1; i++) {

      nodes[i].style.display = "none"

    }

    nodes = containerMobile.childNodes

    for (let i = 0; i < nodes.length - 1; i++) {

      nodes[i].style.display = "none"

    }

    var slide: any = document.querySelector("#cs-slide-" + index)

    slide.style.display = "block"

    slide = document.querySelector("#cs-slide-mobile-" + index)

    slide.style.display = "block"

  }
 
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

    {
      title: "Effective market research",
      description: "We allow you to take the appropriate measures to establish yourself sustainably in your market",
      img: 'assets/images/carousel/carousel11.jpg'
    },
    {
      title: "Tips",
      description: "Professional assistance in operational and strategic business management",
      img: 'assets/images/carousel/carousel13.jpg'
    },
    {
      title: "Commercial mediations",
      description: "We offer mediation in difficult conflicts in the business world",
      img: 'assets/images/carousel/carousel14.jpg'
    },
    {
      title: "Arbitration",
      description: "We find solutions to our customers' daily challenges",
      img: 'assets/images/carousel/carousel15.jpg'
    }

  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1,autoplay:true,autoplaySpeed:5000,dots:true };


  autoSlide(){

    if(this.activeSlide < this.slides.length-1){
      this.activeSlide++
    }else{
      this.activeSlide = 0
    }

    this.showActivatedSlide(this.activeSlide)
    
    setTimeout(this.autoSlide.bind(this), 8000);

  }

  ngOnInit() {
    setTimeout(() => {
      this.showActivatedSlide(this.activeSlide)
      setTimeout(()=>{
        this.autoSlide()
      },8000)
    }, 20);
  }  

}
