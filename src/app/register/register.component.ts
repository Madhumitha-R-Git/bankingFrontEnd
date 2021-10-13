import { Component, OnInit } from '@angular/core';
import {HelpService} from '../help.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Data } from 'src/data';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  phoneNumber="";
  name="";
  mail="";
  password=""
  otp!:string;
  details:boolean=false;
  otpget:boolean=true;
  ver:boolean=true;
  reCaptchaVerifier!: any;
  verify!: string;
  data:Data={
    name:this.name,
    mail:this.mail,
    password:this.password,
    phoneNumber:this.phoneNumber

  };
  constructor(public auth:AngularFireAuth,
    private _service:HelpService,
    public router : Router) { }
  getOTP(){
    if(!(this.phoneNumber=='' || this.name=='' || this.mail==''))
    {
      this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'sign-in-button',
        {
          size: 'invisible',
        }
      );
      this.data={
        name:this.name,
    mail:this.mail,
    password:this.password,
    phoneNumber:this.phoneNumber

      }
      console.log(this.reCaptchaVerifier);
      console.log(this.data);
      console.log(this.phoneNumber);
      var user = 0;
      var usercheck = this._service.regcheck(this.data).subscribe((res)=>
      {
          console.log(res.t);
          if(res.t=="1")
          alert("Phone number already exists")
          if((res.t)=="0")
          {//alert("Phone number already exists")
          firebase
        .auth()
        .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
        .then((confirmationResult) => {
          localStorage.setItem(
            'verificationId',
            JSON.stringify(confirmationResult.verificationId)
          );
          // this.ngZone.run(() => {
          //   this.router.navigate(['/code']);
         // });
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
          setTimeout(() => {
            window.location.reload();
          }, 89000);
        });
       this.name=''
       this.mail=''
       this.phoneNumber=''
       this.password=''
      this.otpget=false
          
      }
      })
  }
   
  }
  verifyOTP(){
    console.log(this.otp);
    console.log(this.data);
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    console.log(credential);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        console.log(response);
        //localStorage.setItem('user_data', JSON.stringify(response));
        // this.ngZone.run(() => {
      //     this._service.add_details(this.data)
      //  this.router.navigate(['/login']);
       // });
       this.otpget=true;
       alert("OTP is verified click on Register button to register");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
      this.otp=''
      this.ver=false;
  }

  ngOnInit(): void { //firebase.initializeApp(environment.firebase);
//console.log(this._service.baseurl);

  }
  
  regBtn()
  {
    this._service.add_details(this.data).subscribe((res)=>
    {
       alert("Here comes your transaction pin store it for money transaction : "+res.pin);

    })
    this.router.navigate(['/login']);
  }
 
}
