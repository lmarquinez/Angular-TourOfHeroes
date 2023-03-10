import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  /* This is a test that checks if the component is created. */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  /* Checking if the title is equal to the string 'TestingJest'. */
  it(`should have as title 'TestingJest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    expect(component.title).toEqual('TestingJest');
  });

  /* Checking if the title is rendered in the component. */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');

    expect(h1?.textContent).toContain(component.title);
  });

  /* Comparing the current component with the snapshot.
 If the component is changed, the test will fail. */
  it('should match with the snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled).toMatchSnapshot();
  });
});
