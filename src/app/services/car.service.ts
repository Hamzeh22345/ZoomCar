import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiEndPoint: string ='https://freeapi.miniprojectideas.com/api/ZoomCar/';
  constructor(private http:HttpClient) { }

  resgisterUser(obj: any): Observable<any>{
    return this.http.post(this.apiEndPoint + 'AddNewUser', obj)
  }
  loginUser(obj: any): Observable<any>{
    return this.http.post(this.apiEndPoint + 'Login', obj ,{observe: 'response'})
  }
}