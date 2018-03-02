import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})
export class DemoPage {
  indexs = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  sections:any[] = Array.apply(null, Array(10)).map(function(item, i) {
    return 0;
  });

  constructor(public navCtrl: NavController) {


  }

}
