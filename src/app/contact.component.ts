import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {Namelist} from "./namelist"


@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'app';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  submit="Submit"
  submitbuttonstyle="btn btn-secondary"

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send(desc: Object) {
      this.items.push(desc);
  }

  today = new Date();
  date= this.today.getHours()+':'+(this.today.getMinutes()+1)+'-'+this.today.getDate()+'-'+(this.today.getMonth()+1)+'-'+this.today.getFullYear();
  sortdate= this.today.getTime()	

  model = {number: 1, firstname:{a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"",j:"",k:""},lastname:{a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"",j:"",k:""},email:"",answer:undefined,message:"",diet:"",music:"",date: this.date, sortdate: this.sortdate};

  onSubmit() {
    this.Send(this.model)
    this.model={number: 1, firstname:{a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"",j:"",k:""},lastname:{a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"",j:"",k:""},email:"",answer:undefined,message:"",diet:"",music:"",date:this.date,sortdate:this.sortdate}
    this.submit="THANK YOU!"
    this.submitbuttonstyle="btn btn-success"
  }


}
