import { Component, OnInit } from '@angular/core';
import {HerosService} from '../../services/heros.service';
import { Heros } from 'src/app/models/heros.model';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros :Heros[] = []

  constructor(private herosService: HerosService) {
    
   }

  ngOnInit(): void {
    this.heros = this.herosService.getHeros();
  }

  
  
}
