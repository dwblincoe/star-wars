import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PeopleService } from '../people.service'
import { FilmsService } from '../films.service'
import { ShipsService } from '../ships.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  starWarsForm: FormGroup
  results: Object

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private filmsService: FilmsService,
    private shipsService: ShipsService
    ) { }

  ngOnInit() {
    this.starWarsForm = this.fb.group({
      starWarsControl: new FormControl(),
      name: new FormControl()
    })
  }

  clickIt(){
    if(this.starWarsForm.value.starWarsControl === 'people'){
      
      this.peopleService.getCharacters(this.starWarsForm.value.name)
        .subscribe(data =>{
          console.log(data)
          this.results = data
        })

    } else if (this.starWarsForm.value.starWarsControl === 'films'){

      this.filmsService.getFilms(this.starWarsForm.value.name)
        .subscribe(data =>{
          console.log(data)
          this.results = data
        })

    } else if (this.starWarsForm.value.starWarsControl === 'starships'){
      
      this.shipsService.getShips(this.starWarsForm.value.name)
        .subscribe(data =>{
          console.log(data)
          this.results = data
        }) 

    } else{
      console.log('this is not the answer you are looking for')
    }
  }

}
