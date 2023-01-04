import { Component } from '@angular/core';



@Component({

  selector: 'card-list',

  template: `



  <h1 class="text-center"> Card List</h1>



      <card>

        <header #header><h1>AnimalH</h1></header>

        <p #p>this is a para1</p>

        <footer #footer><h6>AnimalF</h6></footer>

      </card>




      <card>

        <header #header> <h1>ProductH</h1> </header>

        <p #p>this is a para2</p>

        <footer #footer><h6>ProductF</h6></footer>

      </card>



  `,

})

export class CardListComponent {



}