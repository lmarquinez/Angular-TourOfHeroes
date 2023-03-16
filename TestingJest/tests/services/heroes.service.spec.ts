import { TestBed } from '@angular/core/testing';
import { HeroesService } from '../../src/app/services/heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Hero } from 'src/app/interfaces/hero.interface';

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(HeroesService);
  });

  /* Checking if the service is created and defined. */
  it('should be created', () => {
    expect(service).toBeDefined();
    expect(service).toBeTruthy();
  });

  it('should get all the heroes', () => {
    const getHeroesSpy = jest.spyOn(service, 'getHeroes');

    service.getHeroes().subscribe((arrHeroes) => {
      expect(arrHeroes).toBeTruthy();
      expect(Array.isArray(arrHeroes)).toBeTruthy();
      expect(arrHeroes.length).toBe(heroes.length);
    });

    expect(getHeroesSpy).toHaveBeenCalled();
    expect(getHeroesSpy).toHaveBeenCalledTimes(1);
  });

  it('should get a hero by id', async () => {
    const random = Math.floor(Math.random() * (heroes.length - 1));
    const getHeroSpy = jest.spyOn(service, 'getHero');

    service.getHero(random).subscribe((heroe) => {
      expect(heroe.name).toBeTruthy();
      expect(heroe).toBe(heroes[random]);
    });

    expect(getHeroSpy).toHaveBeenCalled();
    expect(getHeroSpy).toHaveBeenCalledTimes(1);
  });

  it('should search heroes by name', async () => {
    const searchHeroesSpy = jest.spyOn(service, 'searchHeroes');
    const createTerm = () => {
      let word = '';
      for (let i = 0; i <= Math.floor(Math.random() * 3); i++) {
        let n = Math.floor(Math.random() * 25);
        let letter = String.fromCharCode(97 + n);
        word = word + letter;
      }
      return word;
    };
    const term = createTerm();

    service.searchHeroes(term).subscribe((arrHeroes) => {
      expect(arrHeroes).toBeTruthy();
      expect(Array.isArray(arrHeroes)).toBeTruthy();
    });

    expect(searchHeroesSpy).toHaveBeenCalled();
    expect(searchHeroesSpy).toHaveBeenCalledTimes(1);
  });

  it('should add a heroe', async () => {
    const addHeroSpy = jest.spyOn(service, 'addHero');
    const newHero: Hero = { id: 21, name: 'Hercules' };

    service.addHero(newHero);
    service.getHeroes().subscribe((arrHeroes) => {
      expect(arrHeroes).toBe(heroes.length + 1);
    });

    expect(addHeroSpy).toHaveBeenCalled();
    expect(addHeroSpy).toHaveBeenCalledTimes(1);
  });

  it('should update a heroe', async () => {
    const random = Math.floor(Math.random() * (heroes.length - 1));
    const updateHeroSpy = jest.spyOn(service, 'updateHero');
    heroes[random].name = 'update';

    service.updateHero(heroes[random]).subscribe((heroe) => {
      expect(heroe).toBeTruthy();
      expect(heroe.name).toBe(heroes[random].name);
    });

    expect(updateHeroSpy).toHaveBeenCalled();
    expect(updateHeroSpy).toHaveBeenCalledTimes(1);
  });

  // it('should delete a heroe', async () => {
  //   const deleteHeroSpy = jest.spyOn(service, 'deleteHero');

  //   expect(deleteHeroSpy).toHaveBeenCalled();
  //   expect(deleteHeroSpy).toHaveBeenCalledTimes(1);
  // });
});
