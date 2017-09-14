import { Component} from '@angular/core';
import {TodosService} from './todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
   styleUrls: ['./app.component.css'],
  providers :  [TodosService]

})
export class AppComponent {
  /* home = 'home';
  about = 'about';
  types = 'types';
  signin = 'sign In';
*/

}






