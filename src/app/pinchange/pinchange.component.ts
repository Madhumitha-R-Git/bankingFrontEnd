import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pindata } from 'src/pindata';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-pinchange',
  templateUrl: './pinchange.component.html',
  styleUrls: ['./pinchange.component.css']
})
export class PinchangeComponent implements OnInit {
  curr_pin=''
  new_pin=''
  re_pin=''
  phoneNumber=''
  datapin:pindata={
    phoneNumber:this.phoneNumber,
    oldpin:this.curr_pin,
    newpin:this.new_pin
  }
  constructor(public router:Router,
    private service:HelpService
    ) { }

  ngOnInit(): void {
  }
  changePin()
  {
    this.datapin=
    {
      phoneNumber:this.phoneNumber,
      oldpin:this.curr_pin,
      newpin:this.new_pin

    }
   this.service.pin_change(this.datapin).subscribe((res)=>
   {
     console.log(res)
   })
    this.router.navigate(['/login'])
  }

}
