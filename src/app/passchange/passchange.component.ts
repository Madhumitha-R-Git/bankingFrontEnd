import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { passdata } from 'src/passdata';
import { pindata } from 'src/pindata';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.component.html',
  styleUrls: ['./passchange.component.css']
})
export class PasschangeComponent implements OnInit {
  curr_pass=''
  new_pass=''
  re_pass=''
  phoneNumber=''
  datapass:passdata={
    phoneNumber:this.phoneNumber,
    password:this.curr_pass,
    newpassword:this.new_pass
  }
  constructor(public service:HelpService,
    public router:Router) { }

  ngOnInit(): void {
  }
  changePass()
  {
    this.datapass=
    {
      phoneNumber:this.phoneNumber,
      password:this.curr_pass,
      newpassword:this.new_pass

    }
   this.service.pass_change(this.datapass).subscribe((res)=>
   {
     console.log(res)
   })
    this.router.navigate(['/login'])
  }


}
