import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zoomcar';

  registerObj: any = {
    userId: 0,
    name: 'sss',
    userRole: 'CarOwner',
    emailId: '',
    mobileNo: '133455654',
    password: '',
    createdOn: new Date(),
  };

  loginObj: any = {
    userId: 0,
    name: 'sss',
    userRole: 'CarOwner',
    mobileNo: '133455654',
    emailId: '',
    password: '',
  };

  loggedUserObj: any ;

  constructor(private carService: CarService) {
    const local= localStorage.getItem('zoomUser')
    if(local != null){
      this.loggedUserObj = JSON.parse(local);
    }
  }

  onRegister() {
    this.carService.resgisterUser(this.registerObj).subscribe((res: any) => {
      if (res.status) {
        alert('Registration Successfull');
        this.loggedUserObj = res.body.data;
        this.closeRegister();
      } else {
        alert('Registration Failed');
      }
    });
  }

  onLogin() {
    this.carService.loginUser(this.loginObj).subscribe((res: any) => {
      if (res.status) {
        alert('Login Successfull');
        console.log(res);
        localStorage.setItem('zoomUser', JSON.stringify(res.body.data));
        this.closeLogin();
        this.loggedUserObj = res.body.data;
      } else {
        alert('Login Failed');
      }
    });
  }
  logout(){
    localStorage.removeItem('zoomUser');
    this.loggedUserObj = undefined;
  }

  openLogin() {
    const modal = document.getElementById('loginModal');
    if (modal != null) modal.style.display = 'block';
  }
  closeLogin() {
    const modal = document.getElementById('loginModal');
    if (modal != null) modal.style.display = 'none';
  }

  openRegister() {
    const modal = document.getElementById('registerModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  closeRegister() {
    const modal = document.getElementById('registerModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
}
