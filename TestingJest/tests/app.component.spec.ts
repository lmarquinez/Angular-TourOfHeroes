import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeroesComponent } from '../src/app/components/heroes/heroes.component';
import { DashboardComponent } from '../src/app/components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../src/app/components/hero-detail/hero-detail.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let router: Router;

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

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    fixture.detectChanges();
    router.initialNavigation();
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

  it('should route to heroes by click in the link', () => {
    //TODO: find a better way to test the component
    const navigateSpy = jest.spyOn(router, 'navigate');
    const btn_heroes =
      fixture.debugElement.nativeElement.querySelector('#btn_heroes');
    const buttonSpy = jest.spyOn(btn_heroes, 'click');

    btn_heroes.click();

    expect(buttonSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/heroes']);
  });

  it('should route to dashboard by click in the link', () => {
    //TODO: find a better way to test the component
    const navigateSpy = jest.spyOn(router, 'navigate');
    const btn_dashboard =
      fixture.debugElement.nativeElement.querySelector('#btn_dashboard');
    const buttonSpy = jest.spyOn(btn_dashboard, 'click');

    btn_dashboard.click();

    expect(buttonSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  });
});
