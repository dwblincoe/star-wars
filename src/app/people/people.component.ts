import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  character: Object;
  charName: FormGroup

  constructor(private peopleService: PeopleService, private fb: FormBuilder) { }

  

  ngOnInit() {
    this.charName = this.fb.group({
      name: new FormControl()
    })
  }

  getPeople(){
    // console.log(this.charName.value.name)
    this.peopleService.getCharacters(this.charName.value.name)
      .subscribe(data => {
        this.character = data
        console.log(data)
      })
  }

}
