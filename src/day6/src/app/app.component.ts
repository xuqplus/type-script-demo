import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
}

declare var $: any;

console.log(0);

$.ready(function () {
  console.log(1);
  $('#id').html('jquery');
  console.log(2);
});

$('#id').click(function () {
  console.log(3);
});

console.log(4);
