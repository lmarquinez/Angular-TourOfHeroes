import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from '../../src/app/components/hero-detail/hero-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
