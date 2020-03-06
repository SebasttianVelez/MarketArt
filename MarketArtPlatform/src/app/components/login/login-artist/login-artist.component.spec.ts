import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginArtistComponent } from './login-artist.component';

describe('LoginArtistComponent', () => {
  let component: LoginArtistComponent;
  let fixture: ComponentFixture<LoginArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
