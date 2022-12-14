import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


fetchcorona=()=>{
return this.http.get("https://api.rootnet.in/covid19-in/stats/latest")

}

}
