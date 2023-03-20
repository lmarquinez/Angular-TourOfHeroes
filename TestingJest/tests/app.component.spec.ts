import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeroesComponent } from '../src/app/components/heroes/heroes.component';
import { DashboardComponent } from '../src/app/components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../src/app/components/hero-detail/hero-detail.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let router: Router;
  let location: Location;

  const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    fixture.detectChanges();
    router = TestBed.inject(Router);
    // router.initialNavigation();
    location = TestBed.inject(Location);
  });

  /* This is a test that checks if the component is created. */
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  /* Checking if the title is equal to the string 'TestingJest'. */
  it(`should have as title 'TestingJest'`, () => {
    expect(component.title).toEqual('TestingJest');
  });

  /* Checking if the title is rendered in the component. */
  it('should render title', () => {
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain(component.title);
  });

  /* Comparing the current component with the snapshot.
 If the component is changed, the test will fail. */
  it('should match with the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should render the router links', () => {
    const links = fixture.nativeElement.querySelectorAll('nav a');
    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Dashboard');
    expect(links[0].getAttribute('routerLink')).toBe('/dashboard');
    expect(links[1].textContent).toContain('Heroes');
    expect(links[1].getAttribute('routerLink')).toBe('/heroes');
  });

  it('should route to heroes by click in the link', () => {
    //TODO: find a better way to test the component
    const navigateSpy = jest.spyOn(router, 'navigateByUrl');
    const btn_heroes = fixture.nativeElement.querySelector('#heroes-link');
    const buttonSpy = jest.spyOn(btn_heroes, 'click');

    btn_heroes.click();
    // fixture.detectChanges();

    expect(buttonSpy).toHaveBeenCalled();
    // expect(location.path()).toEqual('/heroes');
    expect(navigateSpy).toHaveBeenCalledWith(['/heroes']);
  });

  // it('should route to dashboard by click in the link', () => {
  //   //TODO: find a better way to test the component
  //   const navigateSpy = jest.spyOn(router, 'navigate');
  //   const btn_dashboard =
  //     fixture.debugElement.nativeElement.querySelector('#dashboard-link');
  //   const buttonSpy = jest.spyOn(btn_dashboard, 'click');

  //   btn_dashboard.click();
  //   fixture.detectChanges();

  //   expect(buttonSpy).toHaveBeenCalled();
  //   expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  // });
});
