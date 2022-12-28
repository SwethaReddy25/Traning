import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';



describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      schemas:[NO_ERRORS_SCHEMA]
     

    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display data as 10',()=>{
    //original value in the component is 3
    //here we are assigning 10 ,after obtaining the instance
   
       component.data=10;
   
       //triggers change detection cycle of angular
       fixture.detectChanges();
   
       //Obtaining the root element of the dom
       const rootEle:DebugElement = fixture.debugElement;
       //accessing the h1 from the dom
       //and storing it in h1
       const h1 =rootEle.query(By.css('#msg'));
   
       const h1Element:HTMLElement= h1.nativeElement;
   
       expect(h1Element.textContent).toContain('10');
  });
       
       it('should display data swetha',()=>{
        component.name='swetha';

        fixture.detectChanges();
   
       const rootEle:DebugElement = fixture.debugElement;
       
       const h1 =rootEle.query(By.css('#msg2'));
   
       const h1Element:HTMLElement= h1.nativeElement;
   
       expect(h1Element.textContent).toContain('swetha');


       });
   
   
     });

