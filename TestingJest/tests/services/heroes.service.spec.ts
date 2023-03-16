import { TestBed } from '@angular/core/testing';
import { HeroesService } from '../../src/app/services/heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Hero } from 'src/app/interfaces/hero.interface';
import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { of } from 'rxjs';

describe('HeroesService', () => {
  let service: HeroesService;

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

  /* Creating a spy object from the HeroesService class. */
  const heroesServiceSpy: Spy<HeroesService> =
    createSpyFromClass(HeroesService);

  /* Mocking the getHeroes method of the HeroesService class. */
  heroesServiceSpy.getHeroes.mockImplementation(() => of(heroes));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HeroesService, useValue: heroesServiceSpy }],
    });
    service = TestBed.inject(HeroesService);
  });

  /* Checking if the service is created and defined. */
  it('should be created', () => {
    /* Checking if the service is created. */
    expect(service).toBeTruthy();
    /* Checking if the service is defined. */
    expect(service).toBeDefined();
  });

  it('should get all the heroes', () => {
          const getHeroesSpy = jest.spyOn(service, 'getHeroes');
    service.getHeroes();
    expect(getHeroesSpy).toHaveBeenCalledTimes(1);
    });
  });

  // it('should get all the heroes', async () => {
  // heroesServiceSpy.getHeroes().subscribe((arrHeroes) => {
  //   expect(arrHeroes).toBeDefined();
  //   expect(arrHeroes).toBeTruthy();
  //   expect(Array.isArray(arrHeroes)).toBeTruthy();
  //   expect(arrHeroes.length).toBe(heroes.length);
  // });
  // });

  // it('should get a hero by id', async () => {
  //   service.getHero(12).subscribe((heroe) => {
  //     expect(heroe).not.toBeUndefined();
  //     expect(heroe).toBeDefined();
  //     expect(heroe.name).toBeTruthy();
  //   });
  // }, 70000);
});
