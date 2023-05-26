import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponentComponent } from './hero-search-component.component';

describe('HeroSearchComponentComponent', () => {
  let component: HeroSearchComponentComponent;
  let fixture: ComponentFixture<HeroSearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
