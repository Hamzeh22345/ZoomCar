import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

getAllLocations(){
  return this.http.get(this.apiEndPoint + 'GetAllLocations');
}

  getAllCarByOwnerId(userId: number): Observable<any> {
    return this.http.get(this.apiEndPoint + 'GetAllCarsByOwnerId?id=' + userId);
  }

  addNewCar(obj: any): Observable<any> {
    return this.http.post(this.apiEndPoint + 'AddNewCar', obj);
  }
}
