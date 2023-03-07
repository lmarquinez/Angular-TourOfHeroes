import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
// import { HEROES } from '../../db/mock-heroes.db'
import { HeroesService } from '../../services/heroes.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroesService,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
