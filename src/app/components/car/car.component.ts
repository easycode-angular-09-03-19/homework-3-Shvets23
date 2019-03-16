import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public carInfo = {
    name: 'MINI Cooper',
    mileage: 0,
    fuel: 5,
    img: 'http://pngimg.com/uploads/mini/mini_PNG11788.png',
    specifications: ['Двигатель 2 литра', 'Максимальная скорость 200 км/ч', 'Расход топлива 10 л на 100 км']
  }
  constructor() { }
  drive() {
    if (this.carInfo.fuel >0){
      --this.carInfo.fuel;
      this.carInfo.mileage += 10;
    console.log(this.carInfo.fuel, this.carInfo.mileage)
    }else if (this.carInfo.fuel == 0) {
      alert('Not today, guy, not today...')
    }
    
  }
  refuel() {
    this.carInfo.fuel += 5;
  }
  ngOnInit() {
  }

}
