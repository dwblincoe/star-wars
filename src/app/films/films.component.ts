import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FilmsService } from '../films.service'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  filmName:FormGroup
  film: Object

  constructor(private filmService: FilmsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.filmName = this.fb.group({
      name: new FormControl()
    })

  }

  getName(){
    // console.log(this.filmName.value.name)
    this.filmService.getFilms(this.filmName.value.name)
      .subscribe(data => {
        console.log(data)
        this.film = data;
      })
  }

}
