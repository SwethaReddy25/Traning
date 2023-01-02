import { Component, EventEmitter, Input, OnChanges, OnInit,Output,SimpleChanges } from '@angular/core';
@Component({

  selector: 'app-star',

  templateUrl: './star.component.html',

  styleUrls: ['./star.component.css']

})

export class StarComponent implements OnInit,OnChanges {



@Input() rating:number=0;

@Input() msg:string='';

cropWidth:number=75;

constructor() { }

ngOnChanges(changes: SimpleChanges): void {
  this.cropWidth =  this.rating *75/5;

}

@Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();

ngOnInit(): void {

}
onClick():void{

  let msg =  document.querySelector('#h1')?.textContent ?? 'hello';

    this.ratingClicked.emit(msg);

}

}
