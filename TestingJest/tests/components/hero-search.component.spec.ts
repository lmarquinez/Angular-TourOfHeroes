import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroSearchComponent } from '../../src/app/components/hero-search/hero-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
