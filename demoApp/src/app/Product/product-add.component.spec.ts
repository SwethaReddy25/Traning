import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductAddComponent } from './product-add.component';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let injector: TestBed;
  let fixture: ComponentFixture<ProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule,CommonModule,BrowserModule ],
      providers: [ ProductAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // Product Name

  it('should check Product Name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1).toBeTruthy();
  });

  it('should have ProductName type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have name as ProductName', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('name');
  });

  it('should check ProductName input value is correct', () => {
    let name=component.addProduct.controls['name'];
    name.setValue('SwethaRedd');
    expect(name.errors).toBeNull();    

  });
  

//Product Price

  it('should check Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1).toBeTruthy();
  });

  it('should have Price type of number', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');
  });

  it('should have name as Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('price');
  });

  //Image

  it('should check Image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1).toBeTruthy();
  });

  it('should have Image type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have name as image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('image');
  });

 
  //Rating

  it('should check Rating', () => {
    const e1 =fixture.debugElement.query(By.css('#rating'));
    expect(e1).toBeTruthy();
  });

  it('should have Rating type of number', () => {
    const e1 =fixture.debugElement.query(By.css('#rating'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');

  });

  it('should have name as rating', () => {
    const e1 =fixture.debugElement.query(By.css('#rating'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('rating');
  });

 
 
});
