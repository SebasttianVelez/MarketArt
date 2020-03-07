import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArtComponent } from './select-art.component';

describe('SelectArtComponent', () => {
  let component: SelectArtComponent;
  let fixture: ComponentFixture<SelectArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
