import { Component } from '@angular/core';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navclass="navbar noshadow navbar-toggleable-sm  navbar-light";
  title = 'app';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  public error: any;
  public users: FirebaseListObservable<any>;
  authorised=false;
  admin=false;


  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private db: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 300
      }
    });
   this.afAuth.authState.subscribe(
        (auth) => {
          if (auth != null) {
            this.authorised=true
            if (auth.email != "harry2018lucy@gmail.com") {
              this.admin=true
            }
          }
      });
    this.users = db.list('users');
  }


  loginWithEmail(event, password){
    event.preventDefault();
    this.afAuth.auth.signInWithEmailAndPassword("harry2018lucy@gmail.com", password)
      .catch((error: any) => {
        if (error) {
          this.error = error;
        }
      });
  }

  quicklogin() {
    this.loginWithEmail(event, "harry2018lucy")
  }



  logout() {
      this.afAuth.auth.signOut();
      this.authorised=false
      this.admin=false
  }

  Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }
}
