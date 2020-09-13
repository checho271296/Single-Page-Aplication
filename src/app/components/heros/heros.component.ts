import { Component, OnInit } from '@angular/core';
import {HerosService} from '../../services/heros.service';
import { Heros } from 'src/app/models/heros.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros :Heros[] = []
 

  constructor(private herosService: HerosService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.heros = this.herosService.getHeros();
  }

  seeHeros(idx:number){
    this.router.navigate(['hero',idx])
  }
  
  
}
