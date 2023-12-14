import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  locationId: string = '';
  locations: any[] = [];
  fromLocation: string = '';
  toLocation: string = '';
  availableCars: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private carService: CarService, private router: Router) {
    this.activatedRoute.params.subscribe((res) => {
      console.log(res);
      this.locationId = res['from'];
      console.log(this.locationId);
      this.fromLocation = this.locationId;
      this.getCarsFromLocation();
    });
  }

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.carService.getAllLocations().subscribe((res: any) => {
      console.log(res);
      this.locations = res.data;
    });
  }
  getCarsFromLocation() {
    this.carService.getAllCarsByLocation(this.locationId).subscribe((res: any) => {
      console.log(res);
      this.availableCars = res.data;
    });
  }

  onLocationChange() {
    this.carService.getAllCarsByLocation(this.fromLocation).subscribe((res: any) => {
      this.availableCars = res.data;
    });
  }

  makeBooking(carId: number, $event: any) {
    this.router.navigate(['/booking',this.fromLocation, carId]);
  }
}
