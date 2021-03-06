import { Component, OnInit} from '@angular/core';
import { Heros } from '../../models/heros.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-heros-search',
  templateUrl: './heros-search.component.html',
  styleUrls: ['./heros-search.component.css']
})
export class HerosSearchComponent implements OnInit {

  

  heros :  Heros[]= [];
  term : string;
  
  constructor(private activatedRoute:ActivatedRoute, private herosService :HerosService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params =>{
        this.term = params['name']
        this.heros = this.herosService.searchHeros(params['name']);
      })
  }

  seeHeros(idx:number){
    this.router.navigate(['hero',idx])
  }


}
