import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContent5Component } from './home-content-5.component';

describe('HomeContent5Component', () => {
  let component: HomeContent5Component;
  let fixture: ComponentFixture<HomeContent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContent5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
