import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBootComponent } from './event.component';

describe('EventComponent', () => {
  let component: EventBootComponent;
  let fixture: ComponentFixture<EventBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
