import { Component, OnInit, Input } from '@angular/core';
import { Heros } from 'src/app/models/heros.model';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  @Input() hero : Heros;

  @Input() i: number;
  constructor() { }

  ngOnInit(): void {
  }

}
