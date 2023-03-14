import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { of } from 'rxjs/internal/observable/of';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HeroesComponent } from '../../src/app/components/heroes/heroes.component';
import { HeroesService } from '../../src/app/services/heroes.service';

const heroes = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  const heroesServiceSpy: Spy<HeroesService> =
    createSpyFromClass(HeroesService);
  heroesServiceSpy.getHeroes.mockImplementation(() => of(heroes));
  heroesServiceSpy.addHero.mockImplementation((hero: Hero) => of(hero));
  heroesServiceSpy.deleteHero.mockImplementation((heroId: number) => {
    const idx = heroes.findIndex((h) => h.id === heroId);
    const hero = heroes[idx];
    // heroes.splice(idx);
    return of(hero);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroesComponent],
      providers: [{ provide: HeroesService, useValue: heroesServiceSpy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HeroesComponent);
    expect(component.heroes.length).toBe(0);
  });

  it('should load all heroes', () => {
    component.ngOnInit();
    expect(component.heroes.length).toBe(heroes.length);
  });

  it('should load the first heroe', () => {
    component.ngOnInit();
    expect(component.heroes[0]).toBe(heroes[0]);
  });

  it('should create a new heroe', () => {
    const heroName = 'Hercules';
    const currLgh = component.heroes.length;
    component.add(heroName);
    expect(component.heroes.length).toBe(currLgh + 1);
    expect(component.heroes[component.heroes.length - 1].name).toBe(heroName);
  });

  it('should delete a heroe', async () => {
    const currLgh = component.heroes.length;
    const random = Math.floor(Math.random() * (heroes.length - 1));
    component.delete(heroes[random]);
    expect(component.heroes.length).toBe(currLgh - 1);
  });
});
