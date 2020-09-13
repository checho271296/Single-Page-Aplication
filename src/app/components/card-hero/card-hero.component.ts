import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Heros } from 'src/app/models/heros.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  @Input() hero : Heros;
  @Input() i: number;

  @Output() selectedHero : EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHero = new EventEmitter();
   }

  ngOnInit(): void {
  }

  seeHero(){
    this.router.navigate(['hero',this.i]) ;  
  
  }

}
