import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('00');
    $('#id').html('11');
    $('#id').click(function () {
      console.log('22');
      $('#id').html('jquery works..');
    });
    console.log('33');
  }

}
