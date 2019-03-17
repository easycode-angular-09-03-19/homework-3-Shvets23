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
    specifications: ['Engine: 1.6-litre 120.7bhp Petrol Engine;', 'Top Speed: 197km/hr;', 'Fuel Tank Capacity: 40 Liters;', 'TransmissionType: Automatic;']
  }
  constructor() { }
  public drive(): void {
    if (this.carInfo.fuel >0){
      --this.carInfo.fuel;
      this.carInfo.mileage += 10;
    }
    
  }
  public refuel(): void {
    this.carInfo.fuel += 5;
  }
  ngOnInit() {
  }

}
