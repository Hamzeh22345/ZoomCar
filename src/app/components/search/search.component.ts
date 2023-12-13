import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((res) => {
      console.log(res);
    });
  }
}
