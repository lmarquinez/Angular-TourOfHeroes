import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HEROES } from '../../db/mock-heroes.db'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
