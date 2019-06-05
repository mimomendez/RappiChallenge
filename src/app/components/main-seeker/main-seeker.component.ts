import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-seeker',
  templateUrl: './main-seeker.component.html',
  styleUrls: ['./main-seeker.component.css']
})
export class MainSeekerComponent implements OnInit {

  categories: any;
  apiUrl = 'http://localhost:3000';

  constructor(private router: Router, public http: HttpClient) {
  }

  ngOnInit() {
    const promise = this.getCategories();
    promise.then(data => {
      this.categories = data;
    });
  }

  getCategories() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl + '/categories').subscribe(data => {
      resolve(data);
    },
      err => {
        console.log(err);
        });
      });
  }

  redirect(item) {
    const input: any = document.getElementById('input' + item.id.toString());
    if (input && input.value) {
      this.router.navigate(['app/filters-seeker/' + item.id + ' / ' + input.value]);
    } else {
      this.router.navigate(['app/filters-seeker/' + item.id]);
    }
  }

  public haveSublevel(data: object): boolean {
    return data.hasOwnProperty('sublevels');
  }
}
