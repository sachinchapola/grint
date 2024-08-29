import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContent2Component } from './home-content-2.component';

describe('HomeContent2Component', () => {
  let component: HomeContent2Component;
  let fixture: ComponentFixture<HomeContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
