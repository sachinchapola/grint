import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContent3Component } from './home-content-3.component';

describe('HomeContent3Component', () => {
  let component: HomeContent3Component;
  let fixture: ComponentFixture<HomeContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
