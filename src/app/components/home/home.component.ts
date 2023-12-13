import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loggedUserObj: any;
  constructor(private carService: CarService, private router: Router) {
    const local = localStorage.getItem('zoomUser');
    if (local != null) {
      this.loggedUserObj = JSON.parse(local);
    }
  }

  popularCars: any[] = [];
  locations: any[] = [];
  fromLocation: string = '';
  toLocation: string = '';
  sfof:any;
  ngOnInit(): void {
    this.getAllCarByOwnerId();
    this.getAllLocations();
  }
  getAllCarByOwnerId() {
    this.carService.getAllCarByOwnerId(this.loggedUserObj.userId).subscribe((res: any) => {
      this.popularCars = res.data;
    });
  }

  getAllLocations() {
    this.carService.getAllLocations().subscribe((res: any) => {
      console.log(res)
      this.locations = res.data;
    });
  }
  navigateToSearchPage($event:any) {
    console.log($event.target.to.value);
    
    this.router.navigate(['/search', $event.target.from.value,$event.target.to.value]);
  }
}
