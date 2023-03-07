import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from '../db/mock-heroes.db';

import { Observable, of } from 'rxjs';

import { MessagesService } from '../services/messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private messageService: MessagesService) {}

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
