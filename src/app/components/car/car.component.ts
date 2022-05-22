import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name!: string;
  speed!: number;
  model!: string;
  colors!: Colors;
  options!: string [];
  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = 'AUDI';
    this.speed = 320;
    this.model = 'RS8';
    this.colors = {
      car: 'Черный',
      salon: 'Красный',
      wheels: 'Белый'
    };
    this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt (option: string) {
    if (option == '') {
      return alert("Данные не введены!");
    }

    this.options.unshift(option);
    return false;
  }

  deleteOpt(option: string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName: string) {
    if (carName == 'bmw'){
      this.name = 'BMW';
      this.speed = 290;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Черный'
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
    } else if (carName == 'audi') {
      this.name = 'AUDI';
      this.speed = 330;
      this.model = 'RS8';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
    } else if (carName == 'honda'){
      this.name = 'HONDA';
      this.speed = 410;
      this.model = 'CIVIC TYPE R';
      this.colors = {
        car: 'Черный',
        salon: 'Красный',
        wheels: 'Белый'
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг', 'Круиз-контроль'];
    }
  }
}

interface Colors {
  car: string,
  salon: string,
  wheels:string
}
