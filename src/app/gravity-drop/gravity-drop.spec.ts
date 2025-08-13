import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravityDrop } from './gravity-drop';

describe('GravityDrop', () => {
  let component: GravityDrop;
  let fixture: ComponentFixture<GravityDrop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GravityDrop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GravityDrop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
