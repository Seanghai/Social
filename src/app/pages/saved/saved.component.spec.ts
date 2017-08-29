import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedComponent } from './saved.component';

describe('SavedComponent', () => {
  let component: SavedComponent;
  let fixture: ComponentFixture<SavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});