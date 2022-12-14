import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronastateComponent } from './coronastate.component';

describe('CoronastateComponent', () => {
  let component: CoronastateComponent;
  let fixture: ComponentFixture<CoronastateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronastateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronastateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
