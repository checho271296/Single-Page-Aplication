import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heros } from '../../models/heros.model';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero : Heros;
 

  constructor(private activatedRouter: ActivatedRoute, private herosService : HerosService) { }

  ngOnInit(): void {
    this.getInfoHero()
  }

  getInfoHero(){
    this.activatedRouter.params
      .subscribe(params =>{
          this.hero = this.herosService.getHeros()[params['id']];
          
      })
  }

}
