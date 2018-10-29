import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  getShips(name){
    // console.log(name)
    return this.http.get(`https://swapi.co/api/starships/?search=${name}`)
  }
}
