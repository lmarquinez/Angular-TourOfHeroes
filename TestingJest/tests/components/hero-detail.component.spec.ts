import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HeroDetailComponent } from '../../src/app/components/hero-detail/hero-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesService } from '../../src/app/services/heroes.service';

import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { of } from 'rxjs';
import { Hero } from 'src/app/interfaces/hero.interface';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
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
  heroesServiceSpy.getHero.mockImplementation((heroId: number) => {
    const idx = heroes.findIndex((h) => h.id === heroId);
    const hero = heroes[idx];
    of(hero);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [HeroDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* This test is checking if the component is created, defined and an instance of the HeroesComponent class. */
  it('should create', () => {
    /* Checking if the component is created. */
    expect(component).toBeTruthy();
    /* Checking if the component is defined. */
    expect(component).toBeDefined();
    /* Checking if the component is an instance of the HeroesComponent class. */
    expect(component).toBeInstanceOf(HeroDetailComponent);
  });

  // it('should load the heroe', () => {
  //   //TODO:
  // });

  // it(`should save the changes by clicking 'Save' button`, () => {
  //   //TODO:
  // });

  // it(`should go back by clicking 'Back' button`, () => {
  //   //TODO:
  // });
});
