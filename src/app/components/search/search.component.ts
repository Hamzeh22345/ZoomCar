import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private activateRoute: ActivatedRoute, private carService: CarService) {
    this.activateRoute.params.subscribe((res) => {
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
}
