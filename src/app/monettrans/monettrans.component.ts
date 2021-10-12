import { Component, OnInit } from '@angular/core';
import { moneytrans } from 'src/moneytrans';
import { HelpService } from '../help.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-monettrans',
  templateUrl: './monettrans.component.html',
  styleUrls: ['./monettrans.component.css']
})
export class MonettransComponent implements OnInit {
  ngOnInit(): void {
     //firebase.initializeApp(firebase);
   }
  sender_phoneNumber=''
  receiver_phoneNumber=''
  pin=''

  amount=''
  moneydata:moneytrans={
    senderphoneNumber:this.sender_phoneNumber,
    receiverphoneNumber:this.receiver_phoneNumber,
    pin:this.pin,
    amount:this.amount
  }
  constructor(private service:HelpService,
    public router:Router) { }
 sendBtn()
  {
    this.moneydata={
      senderphoneNumber:this.sender_phoneNumber,
      receiverphoneNumber:this.receiver_phoneNumber,
      pin:this.pin,
      amount:this.amount
    }
    this.service.moneytrans_check(this.moneydata).subscribe((res)=>
    {
      console.log(res.money);
      if(res.money==="-1")
         alert("Receiver does not exists")
      else if(res.money==="1")
      alert("Your transaction pin is invalid")
      else if(res.money==="0")
      {
      
       
        this.service.moneytrans_success(this.moneydata).subscribe((res)=>
    {
      if(res.action=="1")
      {alert("money is transfered")
      this.router.navigate(['/dashboard'])
    }
    })
      }

    }
    )


  }
 

}
