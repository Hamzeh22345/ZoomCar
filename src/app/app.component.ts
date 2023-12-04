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

  // loginObj: any = {
  //   emailId: '',
  //   password: '',
  // };

  constructor(private carService: CarService) {}

  onRegister() {
    this.carService.resgisterUser(this.registerObj).subscribe((res: any) => {
      if (res.status) {
        alert('Registration Successfull');
        this.closeRegister();
      } else {
        alert('Registration Failed');
      }
    });
  }

  onLogin() {
    this.carService.loginUser(this.registerObj).subscribe((res: any) => {
      if (res.status) {
        alert('Login Successfull');
        localStorage.setItem('token', JSON.stringify(res.data));
        this.closeLogin();
      } else {
        alert('Login Failed');
      }
    });
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
