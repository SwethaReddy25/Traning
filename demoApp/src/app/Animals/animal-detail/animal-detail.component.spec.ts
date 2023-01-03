import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailsComponent } from './animal-detail.component';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
