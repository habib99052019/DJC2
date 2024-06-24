import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit  {
 
  display: any;
  center: google.maps.LatLngLiteral = {
    
      lat: 47.49071353985991,
      lng: 8.70563970923092
  };
  zoom = 6;
  userForm: FormGroup;
  isFormSubmitted :boolean=false;

  constructor() {
    this.userForm=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.maxLength(50)]),
      email:new FormControl("",[Validators.required,Validators.email]),
      phone:new FormControl("",[Validators.required]),
      subject:new FormControl(""),
      message:new FormControl("",[Validators.required])


    }

    )
   }

  ngOnInit() {


    }

  /*------------------------------------------
  --------------------------------------------
  moveMap()
  --------------------------------------------
  --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  /*------------------------------------------
  --------------------------------------------
  move()
  --------------------------------------------
  --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  submit(){
    this.isFormSubmitted=true;
    this.userForm.markAsTouched();

  }

}
