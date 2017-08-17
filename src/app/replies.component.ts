import { Component, Input ,Pipe, PipeTransform } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {Response} from "./response"


import { SortPipe } from './sort.pipe';


@Component({
  selector: 'replies-component',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css'],
})
export class RepliesComponent {


  title = 'app';

  sortBy = {
    date: true,
    firstname: false,
    lastname: false,
    message: false,
    diet: false,
    music: false,
    answer: false,
    coming: false,
    notcoming: false
  };

  user: Observable<firebase.User>;
  items: FirebaseListObservable<Response[]>;
  admin=false
  public users: FirebaseListObservable<any>;

  
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private db: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 500
      }
    });

   this.afAuth.authState.subscribe(
        (auth) => {
          if (auth != null) {
            if (auth.email != "harry2018lucy@gmail.com") {
              this.admin=true
            }
          }
      });


    
  }



}
