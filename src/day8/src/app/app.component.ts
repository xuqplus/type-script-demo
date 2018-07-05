import {Component} from '@angular/core';

// import * as $ from 'jquery'; //ok
declare var $: any; //ok
//总之, 只要编译期欺骗糊弄过去了就行

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  aaa(): void {
    $('#aaa').html('yes');
  }
}

