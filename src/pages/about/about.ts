import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  indexs = ['A','B','C','F','G','J','K','L','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  sections:any[] = Array.apply(null, Array(50)).map(function(item, i) {
    return 0;
  });

  constructor(public navCtrl: NavController, public http: Http) {

  }

}
