import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from '../person';
import { SendService } from './send.service';

@Component({
  selector: 'at-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
 
  
})
export class AddNewComponent implements OnInit {
  i:number=0;
  display:boolean=false;
  private sub!:Subscription;
  currentDateTime:any;
  constructor(private addService:SendService, private router: Router,private datePipe: DatePipe){
    let currentDateTime =this.datePipe.transform((new Date), 'MM/dd/yyyy');
  }
  ngOnInit(): void {  }


  onClickSubmit(result: any){
    
    let person:Person={
      fname: result.fname, lname: result.lname, phNumber: result.phoneNumber,date:this.currentDateTime,attendence:false,
      id: this.i++
    };
    console.log(person);
    this.sub=this.addService.addHero(person).subscribe();
    if(this.sub && true){
      this.display=true;
    }
    else{
      this.display=false; 
    }
  }
  
  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
