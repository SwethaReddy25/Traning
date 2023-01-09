import { getTestBed, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Category, IProduct } from "src/app/products/product";
import { ProductService } from "./product.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";



describe('ProductService',()=>{

    let service:ProductService;
    let products:any=[];
    let injector: TestBed;
    let httpMock: HttpTestingController;
  beforeEach(()=>{

     TestBed.configureTestingModule({
     imports: [HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule ],
     
        providers:[ProductService],

     });

     service=TestBed.inject(ProductService);
     injector = getTestBed();
     httpMock = injector.inject(HttpTestingController);
     products=[
      {
        "id":1,
        "name":"Gas Stove",
        "price":4000,
        "image":"../../assets/gasStove.webp",
        "rating":4,
        "category":Category.kitchen
        }
         ,{
        "id":2,
        "name":"Samsung Guru",
        "price":4000,
        "image":"../../assets/samsungGuru.avif",
        "rating":3,
        "category":Category.electrics
      }
       ,{
        "id":3,
        "name":"Nokia 1100",
        "price":3200,
        "image":"../../assets/nokia1100.jpeg",
        "rating":2,
        "category":Category.electrics
      }
      ,{
        "id":4,
        "name":"Mop",
        "price":1500,
        "image":"../../assets/mop.webp",
        "rating":5,
        "category":Category.electrics
      }
       ,{
        "id":5,
        "name":"Chimney",
        "price":40000,
        "image":"../../assets/chimney.jpeg",
        "rating":3.5,
        "category":Category.kitchen
      }
    ]
  });

  it('should be created',()=>{
    expect(service).toBeTruthy();

  })

  it('should getAllProducts',()=>{
      let response:IProduct[]=[];
      let functionCalled=spyOn(service, 'getProducts').and.returnValue(of(products));
      service.getProducts().subscribe(res=>{
        expect(res).toEqual(products);
      });
     expect(functionCalled).toHaveBeenCalled();
    })
    it('should create product',()=>{

      const product1=

          {
            "id":6,
            "name":"cooker",
            "price":60000,
            "image":"../../assets/chimney.jpeg",
            "rating":4.5,
            "category":Category.kitchen
           
           };
           products =[...products,product1];
           service.createProduct(product1).subscribe(res=>expect(res).toEqual(product1) )
           expect(products.length).toEqual(6);
           const req = httpMock.expectOne(service.url);
           expect(req.request.method).toBe('POST');
           req.flush(product1);

           });
           it(' Update Product should update product',()=>{



            let product2 ={
              "id":4,
              "name":"Mop",
              "price":500,
              "image":"../../assets/mop.webp",
              "rating":3,
              "category":Category.electrics
          
             };
             service.updateProduct(product2).subscribe(res=>expect(res).toEqual(product2) )
             const req = httpMock.expectOne(`${service.url}/${product2.id}`);
             expect(req.request.method).toBe('PUT');
             req.flush({product2 });
      
             })
             it('should get product by id',()=>{
              let response:IProduct;
             let product1 ={
              "id":1,
                "name":"Gas Stove",
                "price":4000,
                "image":"../../assets/gasStove.webp",
                  "rating":4,
                 "category":Category.kitchen
             
             };
            
              const fn=spyOn(service, 'getProductById').and.returnValue(of(product1));
              service.getProductById(1).subscribe(res=>{response=res;expect(response).toEqual(product1);});
             expect(fn).toHaveBeenCalled();
            });
})