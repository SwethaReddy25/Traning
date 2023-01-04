import { Component, ContentChild, ContentChildren, ElementRef, Renderer2,  ViewChild } from '@angular/core';




@Component({

  selector: 'card',

  template: `

    <div class="card w-50 bg-secondary m-auto">

      <ng-content select="header"></ng-content>

      <ng-content select="p"></ng-content>

      <ng-content select="footer"></ng-content>

    </div>

  `,

  styles: [

    ` .card {  margin: 5px; padding:5px;  }

    `

  ]

})

export class CardComponent {



  @ContentChild("header") cardContentHeader!: ElementRef;

  @ViewChild("header") cardViewHeader!: ElementRef;



  @ContentChild("p") p1ContentData!: ElementRef;

  @ViewChild("p") p1ViewData!: ElementRef;



  @ContentChild("footer") cardContentFooter!: ElementRef;

  @ViewChild("footer") cardViewFooter!: ElementRef;




  constructor(private renderor:Renderer2) {

    console.log("CardComponent ->constructor "+this.cardContentHeader)

  }



  ngOnChanges() {

    //first time returns undfined

    console.log("CardComponent ->ngOnChanges "+this.cardContentHeader)

  }



  ngOnInit() {

    //returns undfined

    console.log("CardComponent ->ngOnInit "+this.cardContentHeader)

  }



  ngDoCheck() {

    //first time returns undfined

    console.log("CardComponent ->ngDoCheck "+this.cardContentHeader)

  }



  ngAfterContentInit() {

    //cardContentHeader is available here

    console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)



    console.log("CardComponent ->ngAfterContentInit-p1ContentData "+this.p1ContentData)



    console.log("CardComponent ->ngAfterContentInit-contentFooter "+this.cardContentFooter)



    this.renderor.setStyle(this.cardContentHeader.nativeElement,"font-size","20px")

    this.renderor.setStyle(this.cardContentFooter.nativeElement,"font-size","20px")



    //this.cardContentHeader.nativeElement.innerHTML="<h1>Test</h1>"

    //console.log("CardComponent ->ngAfterContentChecked-viewHeader")

    //console.log(this.cardViewHeader)   //undefined

  }





  ngAfterContentChecked() {

    //cardContentHeader is available here

    console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)

  }



  ngAfterViewInit() {

    console.log("CardComponent ->ngAfterViewInit-viewHeader "+this.cardViewHeader)

  }



  ngAfterViewChecked() {

    console.log("CardComponent ->ngAfterViewChecked-viewHeader "+this.cardViewHeader)

  }






}