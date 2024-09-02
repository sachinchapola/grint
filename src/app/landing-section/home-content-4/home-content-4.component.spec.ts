import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContent4Component } from './home-content-4.component';

describe('HomeContent4Component', () => {
  let component: HomeContent4Component;
  let fixture: ComponentFixture<HomeContent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
