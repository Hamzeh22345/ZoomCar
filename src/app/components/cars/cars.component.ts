import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  carAccessoriesObj: any = {
    accessoriesId: 0,
    accessoriesTitle: '',
    showOnWebsite: false,
    carId: 0,
  };
  carObj: any = {
    carId: 0,
    brand: '',
    name: '',
    pricingDescription: '',
    pricing: 0,
    locationId: 0,
    registeredOn: '2023-12-13T08:11:52.058Z',
    imageUrl: '',
    vehicleNo: '',
    ownerUserId: 0,
    ZoomCarAccessories: [],
  };

  loggedUserObj: any;
  carList: any[] = [];
  locations: any[] = [];
  constructor(private carsService: CarService) {
    const local = localStorage.getItem('zoomUser');
    if (local != null) {
      this.loggedUserObj = JSON.parse(local);
    }
  }
  ngOnInit(): void {
    this.getCars();
    this.getLocations();
  }
  getCars() {
    this.carsService.getAllCarByOwnerId(this.loggedUserObj.userId).subscribe((res: any) => {
      this.carList = res.data;
    });
  }
  getLocations() {
    this.carsService.getAllLocations().subscribe((res: any) => {
      this.locations = res.data;
    });
  }
  addNewCar() {
    const modal = document.getElementById('addNewCarModal');
    if (modal != null) modal.style.display = 'block';
  }

  close() {
    const modal = document.getElementById('addNewCarModal');
    if (modal != null) modal.style.display = 'none';
  }

  Add() {
    const obj = JSON.stringify(this.carAccessoriesObj);
    this.carObj.ZoomCarAccessories.push(JSON.parse(obj));
    this.carAccessoriesObj ={
      "accessoriesId": 0,
      "accessoriesTitle": '',
      "showOnWebsite": this.carAccessoriesObj.showOnWebsite,
      "carId": 0,
    }
  }

  saveCar() {
    this.carObj.ownerUserId = this.loggedUserObj.userId;
    this.carsService.addNewCar(this.carObj).subscribe((res: any) => {
      console.log(res);
      if (res.result != null) {
        alert('Accessories added successfully');
        this.getCars();
        this.close();
        this.carObj = {
          brand: '',
          name: '',
          pricingDescription: '',
          pricing: 0,
          locationId: 0,
          registeredOn: '2023-12-13T08:11:52.058Z',
          imageUrl: '',
          vehicleNo: '',
          ownerUserId: 0,
          ZoomCarAccessories: [],
        };
      }
    });
  }
}
