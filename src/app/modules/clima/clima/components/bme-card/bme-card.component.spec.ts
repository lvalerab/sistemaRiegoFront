import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmeCardComponent } from './bme-card.component';

describe('BmeCardComponent', () => {
  let component: BmeCardComponent;
  let fixture: ComponentFixture<BmeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
