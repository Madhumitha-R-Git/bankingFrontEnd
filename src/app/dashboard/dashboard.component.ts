import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from "jwt-decode";
import { HelpService } from '../help.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData:any
  phone:any
  balamant=''
  bal="hidden"
  constructor(public router:Router,
    private service : HelpService
    ) { }

  ngOnInit(): void {
  //  var data = JSON.parse(localStorage.getItem('logintoken') || '{}');
// this.userData = JSON.parse(localStorage.getItem('logintoken') || '{}')
   var Data = JSON.parse(localStorage.getItem('logintoken') || '{}'); 
   var num = JSON.parse(localStorage.getItem('phone') || '{}'); 
    // console.log(this.username.name);
  this.userData= Data
  this.phone = num
  // this.userData = JSON.parse(Data || {})
   // console.log(Data);
  }
  bal_check()
  {
    //console.log("PPP")
   // console.log(this.phone)
    this.service.balcheck_details(this.phone).subscribe((res)=>
    {
      this.balamant=(JSON.stringify((res.balance)))
    })

    // this.userData.activity.push("Balance check");
    this.bal="visible"
  }
  money_transfer()
  {
     console.log("fjeijf");
        this.router.navigate(['/moneytrans'])
  }
  pin_change()
  {
    this.router.navigate(['/pinchange'])
  }
  pass_change()
  {
    this.router.navigate(['/passchange'])
  }
  logout()
  {
    localStorage.setItem('logintoken','')
    this.router.navigate(['/'])
  }

}
