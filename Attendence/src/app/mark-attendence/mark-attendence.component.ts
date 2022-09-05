import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListAllComponent } from '../list-all/list-all.component';
import { MarkAttendenceService } from './mark-attendence.service';

@Component({
  selector: 'at-mark-attendence',
  templateUrl: './mark-attendence.component.html',
  styleUrls: ['./mark-attendence.component.css']
})
export class MarkAttendenceComponent implements OnInit {
  i!:number;
  private sub!:Subscription;

  constructor(private markService:MarkAttendenceService,private router:Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(result:any){  
    this.i=result.idno;
    console.log(result.idno);
    this.sub=this.markService.markAttn(this.i).subscribe();
  }
}
