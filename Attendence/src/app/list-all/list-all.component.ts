import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from '../person';
import { GetallService } from './getall.service';

@Component({
  selector: 'at-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {
  persons: Person[] = [];
  private sub!: Subscription;
  errorMessage: any;

  constructor(private getAllService: GetallService) { }

  ngOnInit(): void {
    this.getAllService.getAll().subscribe({
      next: persons => {
        this.persons=persons.sort((a, b) => (a.id > b.id) ? 1 : -1);
      },
      error: err=>this.errorMessage=err
    })
    console.log(this.persons);
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
