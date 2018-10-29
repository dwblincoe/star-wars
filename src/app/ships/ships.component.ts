import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { ShipsService } from '../ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  shipName: FormGroup;
  ship: Object;

  constructor(private fb: FormBuilder, private shipService: ShipsService) { }

  ngOnInit() {
    this.shipName = this.fb.group({
      name: new FormControl()
    })
  }

  getName(){
    console.log(this.shipName.value.name)
    this.shipService.getShips(this.shipName.value.name)
      .subscribe(data => {
        console.log(data)
        this.ship = data
      })
  }

}
