import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from '../../src/app/components/heroes/heroes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
