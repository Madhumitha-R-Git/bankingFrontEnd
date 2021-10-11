import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Data } from 'src/data';
import { Info } from 'src/info';
import { moneytrans } from 'src/moneytrans';
import { pindata } from 'src/pindata';
import { passdata } from 'src/passdata';
@Injectable({
  providedIn: 'root'
})
export class HelpService {
  

  private url = 'http://localhost:3000/register'
  private check_url = 'http://localhost:3000/login'
  private usercheck_url = 'http://localhost:3000/usercheck'
  private balcheck_url = 'http://localhost:3000/balcheck'
  private moneycheck_url = 'http://localhost:3000/moneytranscheck'
  private moneysucc_url = 'http://localhost:3000/moneytranssucc'
  private pinchange_url = 'http://localhost:3000/pinchange'
  private passchange_url = 'http://localhost:3000/passchange'

  constructor(private __http : HttpClient) { }

  regcheck(data:Data) {
    
    return this.__http.post<any>(this.usercheck_url,data)
  }
  add_details(data: Data)
  {
    console.log(data);
    return this.__http.post<Data>(this.url,data)
   
  }
  check_details(info:Info)
  {
    return this.__http.post<Info>(this.check_url,info)
    
  }
  balcheck_details(phone:any)
  {
    console.log(phone)
    const params = new HttpParams().set('params',phone);
   // console.log(params.keys)
    return this.__http.get<any>(this.balcheck_url,{params})
  }
  moneytrans_check(moneydata:moneytrans)
  {
    return this.__http.post<any>(this.moneycheck_url,moneydata)

  }
  moneytrans_success(moneydata:moneytrans)
  {
    return this.__http.post<any>(this.moneysucc_url,moneydata)
  }
  pin_change(datapin:pindata)
  {
    return this.__http.post<any>(this.pinchange_url,datapin)
  }
  pass_change(datapass:passdata)
  {
    return this.__http.post<any>(this.passchange_url,datapass)
  }
}
