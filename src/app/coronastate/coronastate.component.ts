import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-coronastate',
  templateUrl: './coronastate.component.html',
  styleUrls: ['./coronastate.component.css']
})
export class CoronastateComponent implements OnInit {

  constructor(private api:ApiService) { this.datafromapi()}

  datafromapi=()=>{

    this.api.fetchcorona().subscribe(
      (Response:any)=>{
        this.corona=Response.data.regional
      }
    )

  }


  corona:any=[]

  ngOnInit(): void {
  }

}
