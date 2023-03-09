import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponent } from '../../src/app/components/messages/messages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MessagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
