import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'app';

  submit="Submit"
  submitbuttonstyle="btn btn-secondary"
  failmessage="fail"
  successmessage="success"
  svis="invisible"
  fvis="invisible"


  constructor(private http: HttpClient){
  }



  model = {name:"", email:"", message:""};



  post(mod){

  }


  onSubmit() {
    console.log(this.model)

    let mod={Response:this.model.name+", "+this.model.email+", "+this.model.message}
    console.log(mod)
        this.http.post('https://formspree.io/lucyharry18@gmail.com', (mod)).subscribe(
          res => {
            console.log("success")
                this.submitbuttonstyle="btn btn-success"
                this.svis="visible"
                this.submit="Submitted"
                console.log(this.submit)
                this.model = {name:"", email:"", message:""};
          },
          err => {
                console.log("failure")
                this.fvis="danger"
                this.submit="Error!"
                this.submitbuttonstyle="btn btn-danger"}
    )
  }


      

}
