import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from '../../src/app/components/dashboard/dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { HeroesService } from '../../src/app/services/heroes.service';
import { DebugElement } from '@angular/core';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { HeroesComponent } from '../../src/app/components/heroes/heroes.component';
import { HeroDetailComponent } from '../../src/app/components/hero-detail/hero-detail.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debugElements: DebugElement[];
  let router: Router;

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

  const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: '**', redirectTo: 'themen', pathMatch: 'full' },
  ];

  /* Creating a spy object from the HeroesService class. */
  const heroesServiceSpy: Spy<HeroesService> =
    createSpyFromClass(HeroesService);

  /* Mocking the getHeroes method of the HeroesService class. */
  heroesServiceSpy.getHeroes.mockImplementation(() => of(heroes));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [DashboardComponent],
      providers: [{ provide: HeroesService, useValue: heroesServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElements = fixture.debugElement.queryAll(By.css('.heroes-menu a'));
  });

  /* This test is checking if the component is created, defined and an instance of the DashboardComponent class. */
  it('should create', () => {
    /* Checking if the component is created. */
    expect(component).toBeTruthy();
    /* Checking if the component is defined. */
    expect(component).toBeDefined();
    /* Checking if the component is an instance of the DashboardComponent class. */
    expect(component).toBeInstanceOf(DashboardComponent);
  });

  /* This test is checking if the top heroes are loaded. */
  it('should load top heroes', () => {
    const topHeroes = heroes.slice(1, 5).length;
    component.ngOnInit();
    expect(component.heroes.length).toBe(topHeroes);
    expect(debugElements.length).toBe(topHeroes);
  });

  // it('should route to heroe detail by click in the heroe', () => {
  //   //TODO: find a better way to test the component

  // });
});
