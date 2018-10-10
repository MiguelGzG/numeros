import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //tipos primitivos number, string, boolena, any, Array
  num: number;
  mayorMenor: string = "...";
  numSecreto: number = this.numAleatorio(0, 10);

  constructor(public navCtrl: NavController) {


  }
  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a));
  }

  compruebaNumero() {
    if (this.num) {
      if (this.numSecreto < this.num) {
        this.mayorMenor = "menor";
      }
      else if (this.numSecreto > this.num) {
        this.mayorMenor = "mayor";
      }
      else {
        this.mayorMenor = '';
      }
    }
  }

  reinicia(){
    this.num=null;
    this.mayorMenor="...";
    this.numSecreto=this.numAleatorio(1,10);
  }
}
