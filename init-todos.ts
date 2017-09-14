import {isNullOrUndefined, isUndefined} from 'util';

export class Init {
  load() {
    if (localStorage.getItem('todos') == null) {
      console.log('no todos');
      var todos = [
        {
         text: 'dii'
        }
      ];
      localStorage.setItem ('todos' , JSON.stringify(todos));
      return;
    } else {
      console.log('found');
    }
  }
}
