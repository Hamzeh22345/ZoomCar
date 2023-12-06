import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  carAccessories: any = {
    accessoriesId: 0,
    accessoriesTitle: '',
    showOnWebsite: true,
    carId: 0,
  };
  carObj: any = {
    carId: 0,
    brand: '',
    name: '',
    pricingDescription: '',
    pricing: 0,
    locationId: 0,
    registeredOn: '',
    imageUrl: '',
    vehicleNo: '',
    ownerUserId: 0,
    ZoomCarAccessoriess: [],
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
}
