import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit  {
 baseUrl=environment.baseURL
  display: any;
  center: google.maps.LatLngLiteral = {
    
      lat: 47.49071353985991,
      lng: 8.70563970923092
  };
  
  zoom = 6;

  userForm = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.maxLength(50)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    phone:new FormControl("",[Validators.required]),
    subject:new FormControl(""),
    message:new FormControl("",[Validators.required])
  })

  isFormSubmitted :boolean=false;

  constructor(private http:HttpClient) {}

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
    console.log("err")
    this.isFormSubmitted=true;
    
    this.http.post(this.baseUrl +"/sendEmail",this.userForm.value).subscribe((res:any)=>{

      console.log(res)
      var message :any
      message=res
      if(message.message=="email send sucessfully"){

        alert("votre enregistrement a été effectué avec succès")
      }
      else{
        alert("Error")
      }

    })

  }

}
