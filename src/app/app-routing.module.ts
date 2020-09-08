import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroComponent } from './components/hero/hero.component';
import { HerosSearchComponent } from './components/heros-search/heros-search.component';

const routes: Routes = [
  {
    path: 'home',
    component:  HomeComponent
  },
  {
    path: 'about',
    component:  AboutComponent
  },{
    path: 'heros',
    component:  HerosComponent
  },
  {
    path : 'hero/:id',
    component: HeroComponent
  },
  {
    path : 'heroSearch/:name',
    component: HerosSearchComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
