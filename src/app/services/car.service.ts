import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiEndPoint: string = 'https://freeapi.miniprojectideas.com/api/ZoomCar/';
  constructor(private http: HttpClient) {}

  resgisterUser(obj: any): Observable<any> {
    return this.http.post(this.apiEndPoint + 'AddNewUser', obj);
  }
  loginUser(obj: any): Observable<any> {
    return this.http.post(this.apiEndPoint + 'Login', obj, {
      observe: 'response',
    });
  }

  getAllLocations() {
    return this.http.get(this.apiEndPoint + 'GetAllLocations');
  }

  getAllCarByOwnerId(userId: number): Observable<any> {
    return this.http.get(this.apiEndPoint + 'GetAllCarsByOwnerId?id=' + userId);
  }

  addNewCar(obj: any): Observable<any> {
    return this.http.post(this.apiEndPoint + 'AddNewCar', obj);
  }

  getAllCars() {
    return this.http.get(this.apiEndPoint + 'GetAllCars');
  }

  getAllCarsByLocation(locationId: string): Observable<any> {
    return this.http.get(this.apiEndPoint + 'GetAllCarsByLocation?id=' + locationId);
  }

  getCarById(carId : string): Observable<any> {
    return this.http.get(this.apiEndPoint + 'GetCarById?id=' + carId);
  }
  
}
