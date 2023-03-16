import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroesComponent } from '../../src/app/components/heroes/heroes.component';
import { HeroesService } from '../../src/app/services/heroes.service';
import { Hero } from 'src/app/interfaces/hero.interface';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let debugElements: DebugElement[];

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
  /* Mocking the addHero method of the HeroesService class. */
  heroesServiceSpy.addHero.mockImplementation((hero: Hero) => of(hero));
  /* Mocking the deleteHero method of the HeroesService class. */
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

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElements = fixture.debugElement.queryAll(By.css('.heroes .heroe a'));
  });

  /* This test is checking if the component is created, defined and an instance of the HeroesComponent class. */
  it('should create', () => {
    /* Checking if the component is created. */
    expect(component).toBeTruthy();
    /* Checking if the component is defined. */
    expect(component).toBeDefined();
    /* Checking if the component is an instance of the HeroesComponent class. */
    expect(component).toBeInstanceOf(HeroesComponent);
  });

  /* This test is checking if the heroes property of the component is an array. */
  it('should have an array to save all the heroes', () => {
    expect(Array.isArray(component.heroes)).toBeTruthy();
  });

  /* This test is calling the ngOnInit method of the component and checking if the length of the heroes array is the
same as the length of the heroes array that is being mocked. */
  it('should load all heroes', () => {
    expect(component.heroes.length).toBe(heroes.length);
    expect(debugElements.length).toBe(heroes.length);
  });

  /* This test is checking if the first heroe of the heroes array is the same as the first heroe of the mocked heroes
array. */
  it('should load the first heroe', () => {
    expect(component.heroes[0]).toBe(heroes[0]);
    expect(debugElements[0].nativeElement.textContent).toContain(
      heroes[0].id + ' ' + heroes[0].name
    );
  });

  /* This test is checking if the add method of the component is working properly. */
  it('should create a new heroe', () => {
    const heroName = 'Hercules';
    const currLgh = component.heroes.length;
    const addSpy = jest.spyOn(component, 'add');

    component.add(heroName);
    fixture.autoDetectChanges();
    debugElements = fixture.debugElement.queryAll(By.css('.heroes .heroe a'));

    expect(component.heroes.length).toBe(currLgh + 1);
    expect(component.heroes[component.heroes.length - 1].name).toBe(heroName);
    expect(debugElements.length).toBe(currLgh + 1);
    expect(addSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalledTimes(1);
  });

  /* This test is checking if the delete method of the component is working properly. */
  it('should delete a heroe', () => {
    const currLgh = component.heroes.length;
    const random = Math.floor(Math.random() * (heroes.length - 1));
    const deleteSpy = jest.spyOn(component, 'delete');

    component.delete(heroes[random]);
    fixture.autoDetectChanges();
    debugElements = fixture.debugElement.queryAll(By.css('.heroes .heroe a'));

    expect(component.heroes.length).toBe(currLgh - 1);
    expect(debugElements.length).toBe(currLgh - 1);
    expect(deleteSpy).toHaveBeenCalled();
    expect(deleteSpy).toHaveBeenCalledTimes(1);
  });

  // it('should route to heroe detail by click in the heroe', () => {
  //   //TODO: find a better way to test the component
  // });

  // it('should route to dashboard by click in the link', () => {
  //   //TODO: find a better way to test the component
  // });
});
