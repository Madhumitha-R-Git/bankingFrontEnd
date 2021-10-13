import { Component, OnInit} from '@angular/core';
import {HelpService} from '../help.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Info } from 'src/info';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
phoneNumber = ""
password=""
check:Info={
  phoneNumber:this.phoneNumber,
   password:this.password
}
// reCaptchaVerifier!: any;
// otp!: string;
//   verify: any;
  constructor( public router:Router,
    // private ngZone: NgZone,
   private _serv : HelpService 
    ) { }

  ngOnInit(): void {
   
    
  //  firebase.initializeApp(firebase);
  }
//   onOtpChange(otp: string) {
//     this.otp = otp;
//   }
//   getOTP() {
//     this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//       'sign-in-button',
//       {
//         size: 'invisible',
//       }
//     );
//     console.log(this.reCaptchaVerifier);

//     console.log(this.phoneNumber);
//     firebase
//       .auth()
//       .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
//       .then((confirmationResult) => {
//         localStorage.setItem(
//           'verificationId',
//           JSON.stringify(confirmationResult.verificationId)
//         );
//         // this.ngZone.run(() => {
//         //   this.router.navigate(['/code']);
//        // });
//       })
//       .catch((error) => {
//         console.log(error.message);
//         alert(error.message);
//         setTimeout(() => {
//           window.location.reload();
//         }, 5000);
//       });
//   }

  
// // --->verify
//   handleClick() {
//     console.log(this.otp);
//     var credential = firebase.auth.PhoneAuthProvider.credential(
//       this.verify,
//       this.otp
//     );

//     console.log(credential);
//     firebase
//       .auth()
//       .signInWithCredential(credential)
//       .then((response) => {
//         console.log(response);
//         //localStorage.setItem('user_data', JSON.stringify(response));
//         // this.ngZone.run(() => {
//         //   this.router.navigate(['/dashboard']);
//        // });
//       })
//       .catch((error) => {
//         console.log(error);
//         alert(error.message);
//       });
//   }
LogBtn()
{
  console.log("tedting/.");
  
  this.check={
    phoneNumber : this.phoneNumber,
    password : this.password
  }
  console.log(this.check);
    this._serv.check_details(this.check).subscribe((res)=>
    {
       console.log(res.accessToken);
      if(res.accessToken=="")
      {
        alert("Password mismatch");
      }
      else if(res.accessToken=="User not exists")
      {
        alert("User does not exists");
      }
      else
       {localStorage.setItem('logintoken',JSON.stringify(res.accessToken))
       localStorage.setItem('phone',JSON.stringify(res.phone))
       this.router.navigate(['/dashboard'])
    }

    })
}
regbtn()
{
  this.router.navigate(['/register'])

}
}

 
