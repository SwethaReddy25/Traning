import { DebugElement } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';



import { StarComponent } from './star.component';



describe('StarComponent', () => {

  let component: StarComponent;

  let fixture: ComponentFixture<StarComponent>;

  let element:HTMLElement;



  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ StarComponent ]

    })

    .compileComponents();



    fixture = TestBed.createComponent(StarComponent);

    component = fixture.componentInstance;

    element=fixture.nativeElement;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should display @Input msg star App',()=>{

   

    component.msg ='star App';



    fixture.detectChanges();



    const rootEle:DebugElement = fixture.debugElement;

   

    const h1 =rootEle.query(By.css('#msg'));



    const h1Element:HTMLElement= h1.nativeElement;



    expect(h1Element.textContent).toContain('star App');



  });

  it(`should check whether @Output is

  correctly emitting event  object of string type `,()=>{



        spyOn(component.ratingClicked,'emit');

        const div =fixture.nativeElement.querySelector('.crop');

        fixture.nativeElement.querySelector('#h1').textContent=

        'child sending hello to parent';

        const inputText = fixture.nativeElement.querySelector('#h1').textContent;

        fixture.detectChanges();

        div.click();

        fixture.detectChanges();

        expect(component.ratingClicked.emit).

        toHaveBeenCalledWith(inputText);

  });

});


