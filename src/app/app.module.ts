import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgOtpInputModule } from 'ng-otp-input';
import {HttpClientModule} from '@angular/common/http';


import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonettransComponent } from './monettrans/monettrans.component';
import { PinchangeComponent } from './pinchange/pinchange.component';
import { PasschangeComponent } from './passchange/passchange.component';
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    DashboardComponent,
    PinchangeComponent,
    PasschangeComponent
  ],
  imports: [
    NgbCollapseModule,
    NgOtpInputModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
