import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(name){
    // console.log(name)
    return this.http.get(`https://swapi.co/api/films/?search=${name}`)
  }
}
