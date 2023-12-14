import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  carId: string = '';
  locationId: string = '';
  carDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.carId = res.carId;
      this.locationId = res.locationId;
      this.getCarDetails();
    });
  }


  ngOnInit(): void {}

  getCarDetails() {
    this.carService.getCarById(this.carId).subscribe((res: any) => {
      this.carDetails = res.data;
    });
  }
}

0;
