import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamNavComponent } from './ham-nav.component';

describe('HamNavComponent', () => {
  let component: HamNavComponent;
  let fixture: ComponentFixture<HamNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
