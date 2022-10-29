import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  i
  x!:number
  constructor(private activatedroute: ActivatedRoute,) { 
    this.i=this.activatedroute.snapshot.paramMap.get("i");
    this.x = Number(this.i)
  }

  ngOnInit(): void {
    
  }

}
