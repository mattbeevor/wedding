import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AlertModule } from 'ngx-bootstrap';




import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { RepliesComponent } from './replies.component';
import { LocationComponent } from './location/location.component';
import { SortPipe } from './sort.pipe';
import { OnthedayComponent } from './ontheday/ontheday.component';
import { InformationComponent } from './information/information.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAUKSJK2Wgqr4tZgV_3JhISIMFCZ9Hd7OA",
    authDomain: "wedding-47642.firebaseapp.com",
    databaseURL: "https://wedding-47642.firebaseio.com",
    storageBucket: "wedding-47642.appspot.com",
    messagingSenderId: "221228132311"
  };

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'rsvp',
    component: ContactComponent,
  },
  {
    path: 'replies',
    component: RepliesComponent,
  },
  {
    path: 'gettinghere',
    component: LocationComponent,
  },
  {
    path: 'ontheday',
    component: OnthedayComponent,
  },
  {
    path: 'information',
    component: InformationComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home',
    pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    RepliesComponent,
    LocationComponent,
    SortPipe,
    OnthedayComponent,
    InformationComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
